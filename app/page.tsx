export default function Page() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#000,#0f172a,#1e293b)",
      color: "white",
      fontFamily: "Arial",
      padding: "60px"
    }}>
      <h1 style={{fontSize:"52px",marginBottom:"10px"}}>
        Wallace da Silva e Silva
      </h1>

      <p style={{fontSize:"22px",color:"#94a3b8"}}>
        Technology Specialist • IT Support • Systems Analyst
      </p>

      <p style={{
        marginTop:"30px",
        maxWidth:"700px",
        lineHeight:"1.8",
        color:"#cbd5e1"
      }}>
        Profissional de TI com experiência em suporte corporativo,
        automação de processos, desenvolvimento interno e análise de sistemas.
      </p>

      <div style={{marginTop:"35px"}}>
        <a href="mailto:wallacesilvas@yahoo.com.br"
          style={{
            background:"#06b6d4",
            color:"black",
            padding:"14px 24px",
            borderRadius:"10px",
            textDecoration:"none",
            marginRight:"15px",
            fontWeight:"bold"
          }}>
          Contato
        </a>

        <a href="https://github.com/wasilva-star"
          style={{
            border:"1px solid #334155",
            color:"white",
            padding:"14px 24px",
            borderRadius:"10px",
            textDecoration:"none"
          }}>
          GitHub
        </a>
      </div>
    </div>
  );
}
