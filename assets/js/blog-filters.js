(function ($) {
  const $form = $('#bf-form');
  const $results = $('#bf-results');

  function renderPagination(meta) {
    let nav = $results.find('.bf-pagination');
    if (!nav.length && meta.max_pages > 1) {
      nav = $('<nav class="bf-pagination"><button class="bf-prev">Prev</button><span class="bf-page"></span><button class="bf-next">Next</button></nav>');
      $results.append(nav);
    }
    if (meta.max_pages <= 1) {
      $results.find('.bf-pagination').remove();
      return;
    }
    nav.attr('data-page', meta.page);
    nav.attr('data-max', meta.max_pages);
    nav.find('.bf-page').text(meta.page + ' / ' + meta.max_pages);
    nav.find('.bf-prev').prop('disabled', meta.page <= 1);
    nav.find('.bf-next').prop('disabled', meta.page >= meta.max_pages);
  }

  async function fetchPosts(page = 1) {
    if (!$form.length) return;

    const formData = $form.serializeArray().reduce((a, x) => {
      a[x.name] = x.value;
      return a;
    }, {});
    formData.action = 'filter_posts';
    formData.nonce = BF.nonce;
    formData.page = page;

    $results.addClass('bf-loading');

    try {
      const res = await $.post(BF.ajaxurl, formData);
      if (res && typeof res.html !== 'undefined') {
        const $existing = $results.find('.vag-grid, .bf-empty');
        if ($existing.length) {
          $existing.replaceWith(res.html);
        } else {
          $results.prepend(res.html);
        }
        renderPagination({ page: res.page, max_pages: res.max_pages });

        // scroll to top of list
        const top = $results.offset().top - 120;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    } catch (e) {
      console.error(e);
    } finally {
      $results.removeClass('bf-loading');
    }
  }

  // Category topic chips
  $(document).on('click', '.vag-filter-topic', function (e) {
    e.preventDefault();
    const topic = $(this).data('topic');
    $('.vag-filter-topic').removeClass('is-active');
    $(this).addClass('is-active');
    $form.find('input[name="topic"]').val(topic);
    fetchPosts(1);
  });

  // Sort chips
  $(document).on('click', '.vag-filter-sort', function (e) {
    e.preventDefault();
    const sort = $(this).data('sort');
    $('.vag-filter-sort').removeClass('is-active');
    $(this).addClass('is-active');
    $form.find('input[name="sort"]').val(sort);
    fetchPosts(1);
  });

  // Pagination buttons
  $results.on('click', '.bf-prev, .bf-next', function (e) {
    e.preventDefault();
    const nav = $results.find('.bf-pagination');
    const page = parseInt(nav.attr('data-page'), 10) || 1;
    const max = parseInt(nav.attr('data-max'), 10) || 1;
    const next = $(this).hasClass('bf-next') ? Math.min(page + 1, max) : Math.max(page - 1, 1);
    fetchPosts(next);
  });

})(jQuery);
