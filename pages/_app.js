import "../styles/globals.css";
import Style from './_app.module.css'

//INTERNAL IMPORT
import { VotingProvider } from "../context/Voter";
import NavBar from "../components/NavBar/NavBar";

const MyApp = ({ Component, pageProps }) => (
  <VotingProvider>
    <div>
      <NavBar />
      <div className={Style.heading}>
        DECENTRALIZED VOTING APP

      </div>
      <div>
        <Component {...pageProps} />
      </div>
      
    </div>
  </VotingProvider>
);

export default MyApp;
