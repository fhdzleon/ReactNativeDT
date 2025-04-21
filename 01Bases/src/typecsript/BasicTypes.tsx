const BasicTypes = () => {
  const name: string = "Felipe";
  const age: number = 43;
  const isActive: boolean = true;
  const powers: string[] = ["JS", "TS", "CSS", "React"];

  return (
    <div>
      <p>Hola</p>
      {name} - {age} - {isActive ? "Activo" : "Inactivo"}
      <p>{powers.join(" ,")}</p>
    </div>
  );
};

export default BasicTypes;
