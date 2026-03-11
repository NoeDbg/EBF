import type { Member } from '@/lib/site-data';

export function TeamSection({ members }: { members: Member[] }) {
  return (
    <section id="team" className="section container">
      <h2>Who We Are</h2>
      <p className="section-intro">Admins can add or edit members in Sanity Studio (type: member).</p>
      <div className="grid cards-4">
        {members.map((member) => (
          <article className="card" key={member.name}>
            <div className="avatar">{member.name.split(' ').map((p) => p[0]).join('').slice(0, 2)}</div>
            <h3>{member.name}</h3>
            <p className="muted">{member.role} · {member.pole}</p>
            <p>{member.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
