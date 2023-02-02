import Layout from "../components/layout"
import styles from "../styles/Home.module.css"
import Image from 'next/image'

function addMoney(){

}

function transferMoney(){

}

export default function IndexPage() {
  return (
    <Layout>

      <div className={styles.portfolioContainer}>

        <h1> Your Investments</h1>
        <div className= {StyleSheet.buttonBox}>
          <Button onClick={addMoney()} > Add Money </Button>
          <Button onClick={transferMoney()} > Transfer Money </Button>
        </div>
        <div className= {StyleSheet.totalBox}>
        </div>
        <div className= {StyleSheet.singleBox}>
        </div>

      </div>

      <div className={styles.portfolioContainer}></div>

    </Layout>
  )
}