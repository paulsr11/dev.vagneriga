<?php
add_action('wp_enqueue_scripts', function () {
    // Parent CSS
    $parent_ver = wp_get_theme('Divi')->get('Version');
    wp_enqueue_style('divi-parent', get_template_directory_uri() . '/style.css', [], $parent_ver);

    // Child CSS
    $child_css = get_stylesheet_directory() . '/style.css';
    wp_enqueue_style('divi-child', get_stylesheet_uri(), ['divi-parent'], file_exists($child_css) ? filemtime($child_css) : null);

    // Optional: child JS if you add it later
    $child_js = get_stylesheet_directory() . '/assets/js/main.js';
    if (file_exists($child_js)) {
        wp_enqueue_script('divi-child', get_stylesheet_directory_uri() . '/assets/js/main.js', ['jquery'], filemtime($child_js), true);
    }
}, 20);

/**
 * === Blog Filters (code-only) ===
 * Shortcode: [blog_filters]
 */
add_action('wp_enqueue_scripts', function () {
    // enqueue filter assets
    $js  = get_stylesheet_directory() . '/assets/js/blog-filters.js';
    $css = get_stylesheet_directory() . '/assets/css/blog-filters.css';

    if (file_exists($js)) {
        wp_enqueue_script(
            'blog-filters',
            get_stylesheet_directory_uri() . '/assets/js/blog-filters.js',
            ['jquery'],
            filemtime($js),
            true
        );
        wp_localize_script('blog-filters', 'BF', [
            'ajaxurl' => admin_url('admin-ajax.php'),
            'nonce'   => wp_create_nonce('bf_nonce'),
        ]);
    }

    if (file_exists($css)) {
        wp_enqueue_style(
            'blog-filters',
            get_stylesheet_directory_uri() . '/assets/css/blog-filters.css',
            [],
            filemtime($css)
        );
    }
}, 30);


/**
 * Resolve a category ID from slug or numeric value.
 */
function bf_resolve_category_id( $value ) {
    if (empty($value)) {
        return 0;
    }

    if (is_numeric($value)) {
        return (int) $value;
    }

    $term = get_category_by_slug(sanitize_title($value));

    return $term ? (int) $term->term_id : 0;
}


/**
 * Build the public URL that matches the parent category landing page.
 */
function bf_parent_category_url( $cat_id ) {
    if (!$cat_id) {
        return '';
    }

    $term = get_term($cat_id, 'category');

    if (!$term || is_wp_error($term) || empty($term->slug)) {
        return '';
    }

    return home_url( user_trailingslashit($term->slug) );
}


/**
 * Multibyte friendly title casing (first letter uppercase).
 */
function bf_title_case( $text ) {
    if (function_exists('mb_convert_case')) {
        return mb_convert_case($text, MB_CASE_TITLE, 'UTF-8');
    }

    return ucfirst(strtolower($text));
}


/** Render post cards */
function bf_render_posts_cards( WP_Query $q, $view_all_url = '' ) {
    ob_start();

    if ($q->have_posts()) : ?>
        <div class="vag-grid">
        <?php while ($q->have_posts()) : $q->the_post(); 
            $cats = get_the_category();
            $cat_name = $cats ? $cats[0]->name : '';
        ?>
            <article class="vag-card">

                <!-- Thumbnail -->
                <a href="<?php the_permalink(); ?>" class="vag-thumb">
                    <?php if (has_post_thumbnail()) {
                        the_post_thumbnail('large', ['loading' => 'lazy']);
                    } ?>
                </a>

                <!-- Meta row: category + date -->
                <div class="vag-meta">
                    <span class="vag-cat"><?php echo esc_html($cat_name); ?></span>
                    <span class="vag-date"><?php echo get_the_date('d.m.Y'); ?></span>
                </div>

                <!-- Title -->
                <h2 class="vag-title">
                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                </h2>

                <!-- Yellow line -->
                <div class="vag-line"></div>

                <!-- CTA -->
                <a href="<?php the_permalink(); ?>" class="vag-read">
                    LASĪT
                </a>

            </article>
        <?php endwhile; ?>
        </div>
    <?php else : ?>
        <p class="bf-empty">Nav rakstu.</p>
    <?php endif;

    if (!empty($view_all_url)) : ?>
        <div class="vag-view-all">
            <a href="<?php echo esc_url($view_all_url); ?>">
                <?php echo esc_html__('Skatīt visas', 'divi-child'); ?>
            </a>
        </div>
    <?php endif;

    wp_reset_postdata();
    return ob_get_clean();
}


/** Render list rows (Pasākumi-style) */
function bf_render_posts_list( WP_Query $q, $view_all_url = '' ) {
    ob_start();

    if ($q->have_posts()) : ?>
        <div class="vag-list">
        <?php while ($q->have_posts()) : $q->the_post();
            $weekday_raw = date_i18n('l', get_post_time('U'));
            $weekday     = bf_title_case($weekday_raw);
            $date    = get_the_date('d.m');
            $time    = get_the_time('H:i');
        ?>
            <article class="vag-list-row">
                <span class="vag-list-day"><?php echo esc_html($weekday); ?></span>
                <span class="vag-list-date"><?php echo esc_html($date); ?></span>
                <span class="vag-list-time"><?php echo esc_html($time); ?></span>
                <span class="vag-list-title">
                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                </span>
                <span class="vag-list-cta">
                    <a href="<?php the_permalink(); ?>">
                        <?php echo esc_html__('LASĪT', 'divi-child'); ?>
                        <span class="vag-list-arrow">›</span>
                    </a>
                </span>
            </article>
        <?php endwhile; ?>
        </div>
    <?php else : ?>
        <p class="bf-empty">Nav rakstu.</p>
    <?php endif;

    if (!empty($view_all_url)) : ?>
        <div class="vag-view-all">
            <a href="<?php echo esc_url($view_all_url); ?>">
                <?php echo esc_html__('Skatīt visas', 'divi-child'); ?>
            </a>
        </div>
    <?php endif;

    wp_reset_postdata();
    return ob_get_clean();
}



/** AJAX handler for filters */
add_action('wp_ajax_filter_posts', 'bf_ajax_filter_posts');
add_action('wp_ajax_nopriv_filter_posts', 'bf_ajax_filter_posts');

function bf_ajax_filter_posts() {
    check_ajax_referer('bf_nonce', 'nonce');

    $paged        = isset($_POST['page']) ? max(1, intval($_POST['page'])) : 1;
    $parent_cat   = isset($_POST['parent_cat']) ? intval($_POST['parent_cat']) : 0;
    $topic        = isset($_POST['topic']) ? intval($_POST['topic']) : 0;
    $sort         = isset($_POST['sort']) ? sanitize_key($_POST['sort']) : 'newest';
    $per_page     = isset($_POST['per_page']) ? intval($_POST['per_page']) : 9;

    // Map sort
    switch ($sort) {
        case 'oldest':
            $orderby = 'date';
            $order   = 'ASC';
            break;
        case 'alpha':
            $orderby = 'title';
            $order   = 'ASC';
            break;
        case 'popular':
            $orderby = 'comment_count';
            $order   = 'DESC';
            break;
        case 'newest':
        default:
            $orderby = 'date';
            $order   = 'DESC';
            break;
    }

    $args = [
        'post_type'           => 'post',
        'post_status'         => 'publish',
        'paged'               => $paged,
        'posts_per_page'      => $per_page,
        'orderby'             => $orderby,
        'order'               => $order,
        'ignore_sticky_posts' => true,
    ];

    // Tax query: first try topic (child), otherwise parent
    $tax_query = [];

    if ($topic > 0) {
        $tax_query[] = [
            'taxonomy'         => 'category',
            'field'            => 'term_id',
            'terms'            => [$topic],
            'include_children' => true,
        ];
    } elseif ($parent_cat > 0) {
        $tax_query[] = [
            'taxonomy'         => 'category',
            'field'            => 'term_id',
            'terms'            => [$parent_cat],
            'include_children' => true,
        ];
    }

    if (!empty($tax_query)) {
        $args['tax_query'] = $tax_query;
    }

    $q = new WP_Query($args);

    wp_send_json([
        'html'      => bf_render_posts_cards($q),
        'found'     => (int) $q->found_posts,
        'max_pages' => (int) $q->max_num_pages,
        'page'      => (int) $paged,
    ]);
}



/** Shortcode: [blog_filters parent_cat="news" per_page="9" sort="newest" mode="filters|cards3|list5"] */
add_shortcode('blog_filters', function ($atts) {

    $atts = shortcode_atts([
        'per_page'   => 9,
        'parent_cat' => '',          // slug or ID of main category (News / Gallery / Events)
        'sort'       => 'newest',    // newest | oldest | alpha | popular
        'mode'       => 'filters',   // filters | cards3 | list5
    ], $atts, 'blog_filters');

    $parent_cat_id = bf_resolve_category_id($atts['parent_cat']);
    $mode          = in_array($atts['mode'], ['filters', 'cards3', 'list5'], true) ? $atts['mode'] : 'filters';

    // --- Static 3-card grid (latest posts) ---
    if ('cards3' === $mode) {
        $args = [
            'post_type'           => 'post',
            'post_status'         => 'publish',
            'paged'               => 1,
            'posts_per_page'      => 3,
            'orderby'             => 'date',
            'order'               => 'DESC',
            'ignore_sticky_posts' => true,
        ];

        if ($parent_cat_id) {
            $args['tax_query'] = [[
                'taxonomy'         => 'category',
                'field'            => 'term_id',
                'terms'            => [$parent_cat_id],
                'include_children' => true,
            ]];
        }

        $q = new WP_Query($args);
        $view_all_url = bf_parent_category_url($parent_cat_id);

        return bf_render_posts_cards($q, $view_all_url);
    }

    // --- Static list (Pasākumi-style) ---
    if ('list5' === $mode) {
        $args = [
            'post_type'           => 'post',
            'post_status'         => 'publish',
            'paged'               => 1,
            'posts_per_page'      => 5,
            'orderby'             => 'date',
            'order'               => 'DESC',
            'ignore_sticky_posts' => true,
        ];

        if ($parent_cat_id) {
            $args['tax_query'] = [[
                'taxonomy'         => 'category',
                'field'            => 'term_id',
                'terms'            => [$parent_cat_id],
                'include_children' => true,
            ]];
        }

        $q = new WP_Query($args);
        $view_all_url = bf_parent_category_url($parent_cat_id);

        return bf_render_posts_list($q, $view_all_url);
    }

    // --- Map sort to orderby/order ---
    $sort = in_array($atts['sort'], ['newest','oldest','alpha','popular'], true) ? $atts['sort'] : 'newest';

    switch ($sort) {
        case 'oldest':
            $orderby = 'date';
            $order   = 'ASC';
            break;
        case 'alpha':
            $orderby = 'title';
            $order   = 'ASC';
            break;
        case 'popular':
            $orderby = 'comment_count'; // or change to a meta_key if you track views
            $order   = 'DESC';
            break;
        case 'newest':
        default:
            $orderby = 'date';
            $order   = 'DESC';
            break;
    }

    // --- Base query: only posts within parent category (and children) ---
    $args = [
        'post_type'           => 'post',
        'post_status'         => 'publish',
        'paged'               => max(1, get_query_var('paged')),
        'posts_per_page'      => (int) $atts['per_page'],
        'orderby'             => $orderby,
        'order'               => $order,
        'ignore_sticky_posts' => true,
    ];

    if ($parent_cat_id) {
        $args['tax_query'] = [[
            'taxonomy'         => 'category',
            'field'            => 'term_id',
            'terms'            => [$parent_cat_id],
            'include_children' => true,
        ]];
    }

    $q = new WP_Query($args);

    // --- Get subcategories (topics) for this page ---
    $topics = [];
    if ($parent_cat_id) {
        $topics = get_terms([
            'taxonomy'   => 'category',
            'parent'     => $parent_cat_id,
            'hide_empty' => true,
        ]);
    }

    $view_all_url = bf_parent_category_url($parent_cat_id);

    ob_start(); ?>

    <!-- Hidden form, only used to send data via AJAX -->
    <form id="bf-form">
        <input type="hidden" name="parent_cat" value="<?php echo esc_attr($parent_cat_id); ?>">
        <input type="hidden" name="topic" value="0">
        <input type="hidden" name="sort" value="<?php echo esc_attr($sort); ?>">
        <input type="hidden" name="per_page" value="<?php echo (int) $atts['per_page']; ?>">
    </form>

    <!-- Filter bar (matches your design: Tema / Kārtot) -->
    <div class="vag-filter-bar">
        <div class="vag-filter-row">
            <span class="vag-filter-label">Tēma:</span>
            <button class="vag-filter-chip vag-filter-topic is-active" data-topic="0">Visi</button>
            <?php if (!empty($topics) && !is_wp_error($topics)) :
                foreach ($topics as $t) : ?>
                    <button class="vag-filter-chip vag-filter-topic"
                            data-topic="<?php echo esc_attr($t->term_id); ?>">
                        <?php echo esc_html($t->name); ?>
                    </button>
                <?php endforeach;
            endif; ?>
        </div>

        <div class="vag-filter-row">
            <span class="vag-filter-label">Kārtot:</span>
            <button class="vag-filter-chip vag-filter-sort is-active" data-sort="newest">Jaunākais</button>
            <button class="vag-filter-chip vag-filter-sort" data-sort="oldest">Vecākais</button>
            <button class="vag-filter-chip vag-filter-sort" data-sort="alpha">Alfabētiski</button>
            <button class="vag-filter-chip vag-filter-sort" data-sort="popular">Populārākais</button>
        </div>
    </div>

    <div id="bf-results">
        <?php echo bf_render_posts_cards($q); ?>
        <?php if ($q->max_num_pages > 1): ?>
            <nav class="bf-pagination" data-page="1" data-max="<?php echo (int) $q->max_num_pages; ?>">
                <button class="bf-prev" disabled>Prev</button>
                <span class="bf-page">1 / <?php echo (int) $q->max_num_pages; ?></span>
                <button class="bf-next">Next</button>
            </nav>
        <?php endif; ?>
    </div>

    <?php if (!empty($view_all_url)) : ?>
        <div class="vag-view-all">
            <a href="<?php echo esc_url($view_all_url); ?>">
                <?php echo esc_html__('Skatīt visas', 'divi-child'); ?>
            </a>
        </div>
    <?php endif; ?>

    <?php
    return ob_get_clean();
});
