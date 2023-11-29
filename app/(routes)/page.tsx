import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("9f9384bf-2951-4e1a-859f-2677a804f346");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
