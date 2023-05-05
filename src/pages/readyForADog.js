import Header from "../components/header/header";
import styles from "@component/styles/ReadyForADog.module.css";
import Arrow from "../components/pageArrow";
import Collapsible from "react-collapsible";

export default function ReadyForADog() {
 return (
  <div  className={styles.rfad} style={{ backgroundImage: "url(/images/background2.png)" }}>
    <Header />
    <div className={styles.rfad__title}>
      <h2>Am I</h2>
      <h2>ready for</h2>
      <h2>a dog?</h2>
    </div>
    <Arrow className={styles.rfad__arrow} />

    
    <article className={styles.rfad__article}>
      <h3>10 things to think about</h3>
      <Collapsible trigger="1. Dogs are for life">
      <p>
        The average lifespan of a dog is 13 years so make sure you are ready for a long dedicated commitment to your new furry friend. That means loving your pet after the puppy stage, into their naughty energetic teens and then the golden years of Fido’s life.
      </p>
      </Collapsible> 

      <Collapsible trigger="2. Breed research">
        <p>
          Before you go out and choose the first adorable dog you see, it is important that you do your dog breed research. You need to find a suitable breed for your lifestyle and surroundings. You need to take into account the size of your living arrangements, your surrounding area (whether it’s the city or countryside), and your family structure (if you have small children, you’re living alone etc.)
        </p>
      </Collapsible> 

      <Collapsible trigger="3. Time-consuming">
        <p>
          Get ready to sacrifice your time. Similarly to having a small child, bringing a new puppy into your home means you take responsibility of having a living being whose needs often come before your own. This means you might have to sacrifice more time and energy into this small creature than you first thought or that you are accustomed to. You can’t just up and leave for a fun weekend with friends at the last minute like you may be used to. You have to take the time to plan who is going to feed, walk, and watch over your dog in your absence.
        </p>
      </Collapsible> 

      <Collapsible trigger="4. Lifetime costs">
        <p>
          Dogs are expensive so ensure you have the funds to take care of them from the time they are puppies to when they are old. The expenses don’t end after the initial purchase of your dog which tends to be around £400-£900. They need to go to the vet, have plenty of food and water, a bed, collar, lead and other accessories to keep your pet happy and safe. The average lifetime cost of owning a dog is around £16,900 but could be higher or lower depending on the breed, size and health of your dog.
        </p>
      </Collapsible> 

      <Collapsible trigger="5. Pet healthcare">
        <p>
        There is nothing more important than your dog’s health and happiness so be sure to know a good vet nearby. There will be healthy days and emergency medical days in your dog’s life that you need to be on top of. Your dog can become sick and hurt just like any human so you need to keep track of the vaccinations they receive to ensure they remain at their healthiest. To help with this, it is always a good idea to buy health insurance to help cover large unexpected health bills.
        </p>
        <p>Pets in a Pickle understands that finding simple and reliable pet insurance for your cat or dog can be hard. That’s why they’ve improved their website to make it even quicker and easier to get your pet covered. They like to keep things simple, so you get your quote at their best price…which is why you won’t find them on price comparison sites. With new benefits such as access to FirstVet, where unlimited 24/7 video vet visits are included with your policy, you can have peace of mind knowing they’re protected, and they can carry on doing their brilliantly quirky thing! For pet insurance policies as unique as they are, visit their website to get a free quote.</p>
      </Collapsible> 

      <Collapsible trigger="6. Exercise needs">
        <p>
          Dogs have a lot of energy and need daily exercise. This means taking your dog for a walk at least once a day to your local park or having a game in your garden. Some dogs require more exercise than others which is very important to bear in mind when choosing a dog breed.
        </p>
      </Collapsible> 

      <Collapsible trigger="7. Child-friendly">
        <p>
          If you have children, the idea of a puppy popping out from under the Christmas tree will seem like an amazing gift. However, it is important to have your children meet the dog and for your dog to meet your children before adopting it. There are many dogs that don’t get along with young children so it is essential to have them interact before making a surprise purchase.
        </p>
      </Collapsible> 

      <Collapsible trigger="8. Pet-proofing your home">
        <p>
        Your home will be changed forever once your little pup arrives. You will need to “pet-proof” your home in order to keep your dog and your furniture safe. Make sure any toxic foods for your dog are out of their reach, and that things such as hanging cords and vertical blinds are tidied away to avoid any accidents. If you have expensive furniture, a cover or throw is a good idea to protect your sofa or you can train your dog to not jump up.
        </p>
      </Collapsible> 

      <Collapsible trigger="9. Dog training">
        <p>
          Following the above, your dog will need lots of training especially if you’re buying he or she as a small puppy. It is highly likely there may be a toilet incident or two on your rug and don’t be surprised to find some teeth marks on your favourite pair of shoes. To prevent bad habits like these, your pup will need extensive training either at puppy school or in-home training.
        </p>
      </Collapsible> 

      <Collapsible trigger="10. A family member">
        <p>
          Your dog is a part of your family. Treat them as such! They need love and affection, and will give it back to you tenfold.
        </p>
      </Collapsible>         
    </article>
    <p className={styles.rfad__source}>Article source: https://www.petspyjamas.com/blog/10-things-you-need-to-know-before-getting-a-dog/</p>
  </div>
 )
}
