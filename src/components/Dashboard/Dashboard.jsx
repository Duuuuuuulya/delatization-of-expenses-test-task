import { AccountBalance } from "../AccountBalance/AccountBalance";
import { Chart } from "../Chart/Chart";
import { Header } from "../Header/Header";
import { GraphsStatistics } from "../GraphsStatistics/GraphsStatistics";
import { TransactionsHistory } from "../TransactionsHistory/TransactionsHistory";


const Dashboard = () => {
  return(
    <>
      <Header />
      <AccountBalance/>
      <Chart />
      <GraphsStatistics />
      <TransactionsHistory />
    </>
  )
}

export default Dashboard
