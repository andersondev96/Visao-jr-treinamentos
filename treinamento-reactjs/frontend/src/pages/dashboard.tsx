import Head from "next/head";
import Link from "next/link";

import { useEffect, useState } from "react";

import { parseISO, format } from "date-fns";

import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Listing } from "../components/Listing";
import { SideBar } from "../components/Sidebar";

import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";

import {
  Container,
  Balance,
  Transactions,
  Footer,
} from "../styles/pages/Dashboard";
import api from "../services/api";

interface Finance {
  id: string;
  description: string;
  value: number;
  created_at: string;
}

const Home: React.FC = () => {
  const [finances, setFinances] = useState<Finance[]>([]);
  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);
  const [total, setTotal] = useState(0);
  var inc = 0;
  var out = 0;
  var tot = 0;

  useEffect(() => {
    async function handleTransactions() {
      const response = await api.get<Finance[]>(
        `/finances/${localStorage.getItem("@user")}`
      );

      const formatFinances = response.data.map((finance) => {
        return {
          ...finance,
          created_at: format(parseISO(finance.created_at), "dd'/'MM'/'yyyy"),
        };
      });

      response.data.map((finance) => {
        if (finance.value >= 0) {
          inc += finance.value;
          return inc;
        }
        if (finance.value <= 0) {
          out += finance.value;
          return out;
        }
      });

      setFinances(formatFinances);
      setIncome(inc);
      setOutcome(out);
      tot = inc + out;
      setTotal(tot);
    }

    handleTransactions();
  }, []);

  return (
    <Container>
      <Head>
        <title>Dashboard | MyFinances</title>
      </Head>
      <SideBar />
      <Balance>
        <Card title="ENTRADAS" value={income} />

        <Card title="SAÍDAS" value={outcome} />

        <Card title="TOTAL" value={total} />
      </Balance>
      <Transactions>
        {finances &&
          finances.map((finance) => {
            return (
              <Listing
                key={finance.id}
                date={finance.created_at}
                description={finance.value >= 0 ? "Receita" : "Despesa"}
                title={finance.description}
                price={finance.value}
              />
            );
          })}
      </Transactions>

      <hr />
      <Footer>
        <Link href="/recip">
          <a>
            <Button name="CADASTRAR RECEITA" color="#263C9E">
              <BiTrendingUp size={32} />
            </Button>
          </a>
        </Link>

        <Link href="/expenses">
          <a>
            <Button name="CADASTRAR DESPESA" color="#3E4858">
              <BiTrendingDown size={32} />
            </Button>
          </a>
        </Link>
      </Footer>
    </Container>
  );
};

export default Home;
