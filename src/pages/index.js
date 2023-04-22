import Header from '../components/header/header'
import styles from '@component/styles/Home.module.css'

export default function Frontpage() {
  return (
    <div className='frontpage' style={{ backgroundImage: 'url(/images/background-frontpage.png)' }}>
     <Header />
     <section className='frontpage__content'>
      <h1 className='frontpage__title'>Find the Best Dog <br/> Breed for You!</h1>
      
        <div className="frontpage__link">
          <button className='frontpage__link-button'>Let's go</button>
        </div>
     </section>
    </div>
  );
}






