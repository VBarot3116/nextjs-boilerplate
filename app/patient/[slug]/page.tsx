export default function PatientPage({ params }: { params: { slug: string } }) {
  const patients: Record<string, { name: string; blurb: string }> = {
    ava: {
      name: "Ava M. — G1P0, anxious about needles",
      blurb: "First baby; fearful of paralysis; wants partner involved."
    },
    brianna: {
      name: "Brianna T. — BMI 44 with OSA",
      blurb: "Worried about breathing and monitoring; prior difficult airway."
    },
    carmen: {
      name: "Carmen R. — history of thrombocytopenia",
      blurb: "Platelets borderline; wants to avoid general anesthesia."
    },
    diana: {
      name: "Diana L. — prior epidural failure",
      blurb: "Had patchy block in prior labor; skeptical about trying again."
    }
  };

  const p = patients[params.slug];

  return (
    <main style={{ maxWidth: 760, margin: "40px auto", padding: 16, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif" }}>
      <a href="/">← Back</a>
      {!p ? (
        <>
          <h1>Patient not found</h1>
          <p>Check the link and try again.</p>
        </>
      ) : (
        <>
          <h1 style={{ fontSize: 24, margin: "12px 0 6px" }}>{p.name}</h1>
          <p style={{ color: "#555", marginBottom: 16 }}>{p.blurb}</p>

          <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16, background: "#fafafa" }}>
            <h2 style={{ fontSize: 18, marginBottom: 8 }}>Voice chat</h2>
            <p style={{ color: "#555", marginBottom: 12 }}>
              The interactive voice agent will appear here in the next step.
            </p>
            <button disabled style={{ padding: "10px 14px", borderRadius: 8, border: "1px solid #999", background: "#eee" }}>
              Start voice chat (coming soon)
            </button>
          </div>
        </>
      )}
    </main>
  );
}
