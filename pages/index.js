import Layout from "../components/layout"
import styles from "../styles/Home.module.css"
import Image from 'next/image'
import SearchBar from "../components/SearchBar"

function addMoney(){

}

function transferMoney(){

}

export default function IndexPage() {
  return (
    <Layout>

      <div className={styles.portfolioContainer}>

        <h1> your investments</h1>
        <div className= {styles.buttonBox}>
          <Button onClick={addMoney()} > Add Money </Button>
          <Button onClick={transferMoney()} > Transfer Money </Button>
        </div>
        <div className= {styles.totalBox}>
        </div>
        <div className= {styles.singleBox}>
        </div>

      </div>

      <div className={styles.newInvestment}>
        <h1> make a new investment</h1>
        <SearchBar></SearchBar>
        
      </div>

    </Layout>
  )
}