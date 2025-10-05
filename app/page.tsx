export default function Home() {
  const patients = [
    {
      slug: "ava",
      name: "Ava M. — G1P0, anxious about needles",
      blurb: "First baby; fearful of paralysis; wants partner involved."
    },
    {
      slug: "brianna",
      name: "Brianna T. — BMI 44 with OSA",
      blurb: "Worried about breathing and monitoring; prior difficult airway."
    },
    {
      slug: "carmen",
      name: "Carmen R. — history of thrombocytopenia",
      blurb: "Platelets borderline; wants to avoid general anesthesia."
    },
    {
      slug: "diana",
      name: "Diana L. — prior epidural failure",
      blurb: "Had patchy block in prior labor; skeptical about trying again."
    }
  ];

  return (
    <main
      style={{
        maxWidth: "760px",
        margin: "40px auto",
        padding: "16px",
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
      }}
    >
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>OB/GYN Sim Patients</h1>
      <p style={{ color: "#555", marginBottom: 16 }}>
        Pick a patient to practice an epidural consent conversation.
      </p>

      <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
        {patients.map((p) => (
          <li
            key={p.slug}
            style={{
              border: "1px solid #ddd",
              borderRadius: 12,
              padding: 16
            }}
          >
            <div style={{ fontWeight: 600 }}>{p.name}</div>
            <div style={{ color: "#555", fontSize: 14, margin: "6px 0 12px" }}>
              {p.blurb}
            </div>
            <a
              href={`/patient/${p.slug}`}
              style={{
                textDecoration: "none",
                border: "1px solid #333",
                borderRadius: 8,
                padding: "8px 12px",
                display: "inline-block"
              }}
            >
              Talk
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
