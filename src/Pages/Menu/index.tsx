import Layout from "../../Components/Layout";

function Menu() {
  return (
    <Layout>
      <div className="pt-2 md:pt-10 xl:pt-16 pb-16 bg-[url('/wood.jpg')]">
        <div className="w-[90vw] md:w-[70vw] xl:w-[60vw] m-auto">
          <img src="/menu1.jpg" alt="Menu" />
          <img src="/menu2.jpg" alt="Menu" />
        </div>
      </div>
    </Layout>
  );
}

export default Menu;
