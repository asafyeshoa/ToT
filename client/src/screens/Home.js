import Table from "../components/Table";
import '../styles/Home.css'


function Home() {
    return (
        <div className='home-container'>
        <h1  className='title' >Hello Thing Or Two</h1>
            <div className='table-container'>
            <Table/>
            </div>

        </div>
    );
}

export default Home;
