import Link from "next/link";

const MyMenu = () => {
  console.log(process.env.NEXT_PUBLIC_GAID);
  console.log(process.env.authAPIkey);
  
  
  return (
    <div
      className="h-100 d-flex flex-column justify-content-between"
      style={{ minHeight: "80vh" }}
    >
      <div>
        <Link href="/home">Home</Link>
        <br />
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default MyMenu;

export async function getServerSideProps() {
  console.log(process.env.PRIVATE_API_KEY);
  return {
    props: {
      hello: "world",
    },
  };
}
