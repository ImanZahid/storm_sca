import { HashRouter } from "react-router-dom";
import { AppRoutes } from "@/routes/AppRoutes";
import Layout from "@/components/ui/layout";

function App() {
  return (
    <HashRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </HashRouter>
  );
}

export default App;
