function HabitCard({ titulo, meta, ativo = true, diasfeitos=0, categoria = 'Geral' }) {
    const metaAtingida = diasfeitos >= meta

    const mensagemMeta = metaAtingida 
        ? 'Meta da semana atingida!'
        : `${diasfeitos} de ${meta} dias concluídos.`

  return (
    <div className= {"habit-card"}>
        <h3>{titulo}</h3>
        <p>{mensagemMeta}</p>
        <small>categoria: {categoria}</small>

        {/* Ternário: dois resultados possíveis */}
        <span>{ativo ? 'Ativo' : 'Pausado'}</span>

        {/*&&: um resultadoou nada */}
        {metaAtingida &&(
           <p> Parabéns! Você manteve a sequenência essa semana! </p>

        ) }

    </div>
  );
}

export default HabitCard;