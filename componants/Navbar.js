
import Logo from "../componants/Logo";
import HeaderProfile from "../componants/HeaderProfile";
export default function Navbar() {
 

  return (
    <>
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <div
      style={{
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 20,
        alignSelf: "center",
      }}
    >
      <Logo size={20} weight={600} logoSize={46} />
    </div>
    <div style={{ alignSelf: "flex-end", marginTop: -70, marginRight: 25 }}>
      <HeaderProfile />
    </div>
  </div>
  </>
  );
}
