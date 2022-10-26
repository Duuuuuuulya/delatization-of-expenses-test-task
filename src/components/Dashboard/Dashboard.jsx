import { AccountBalance } from "../AccountBalance/AccountBalance";
import { Chart } from "../Chart/Chart";
import { GraphsStatistics } from "../GraphsStatistics/GraphsStatistics";
import { TransactionsHistory } from "../TransactionsHistory/TransactionsHistory";

import './Dashboard.css'

const Dashboard = () => {
  return(
    <div className='page'>
      <AccountBalance/>
      <Chart />
      <GraphsStatistics />
      <TransactionsHistory />
    </div>
  )
}

export default Dashboard
