import { Metadata } from 'next';
import TimelineClient from './TimelineClient';

export const metadata: Metadata = {
  title: 'Laika līnija - Vagneriga',
  description: 'Vāgnera nama vēsturiskā laika līnija',
};

export default function LaikaLinijaPage() {
  return <TimelineClient />;
}
