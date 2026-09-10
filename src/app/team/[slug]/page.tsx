import { redirect } from 'next/navigation';
import { leadershipData } from '@/data/team';

interface TeamMemberPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return leadershipData.map((m) => ({ slug: m.slug }));
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { slug } = await params;
  redirect(`/founders/${slug}`);
}
