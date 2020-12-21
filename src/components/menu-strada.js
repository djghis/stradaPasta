import React from 'react'
import menuStyles from  './menu-strada.module.scss'




const MenuStrada = () => {
  return (
    <div>
      <h2>Pasta</h2>
      <div className={menuStyles.dish}>
        <div className={menuStyles.pasta}>
          <h3 >Spaghetti</h3>
          <p>Perhaps one of the most popular pasta types in the world, spaghetti consists of long, thin noodles which can be paired with a wide variety of sauces. Possibly the most well known dish is Spaghetti Bolognese, where pasta is paired with meat in a marinara sauce. This type of pasta suits meat and vegetable dishes of any sort, or even just garlic and olive oil..</p>
          <h3 >Penne</h3>
          <p>Another popular shape, penne has a round, tube like structure, with diagonal cuts at either end. That’s why it’s best served in dishes that have a relatively thick, creamy sauce as it penetrates the tube and holds the sauce well, such as Penne Arrabbiata. This is also the best type of pasta to use in pasta bake dishes.</p>
          <h3 >Linguine</h3>
          <p>Very similar to the likes of spaghetti, linguine is a little flatter and is considered to be more luxurious. The extra surface area means that it is perfect for pairing with lighter textures, like cream based sauces or seafood.</p>
          <h3 >Fusilli</h3>
          <p>This pasta has a spiralled, corkscrew like shape that pair perfectly with rich meat sauces or chunky vegetables as the chunks get caught in the crevices of the twirls giving the dish a lovely texture. They can also be baked into casseroles or pasta bakes for the same reason.</p>
        </div>
        <div className={menuStyles.sauce}>
          <h4>Sauces choice</h4>
          <h3>Carbonara</h3>
            <p>(Italian: [karboˈnaːra]) is an Italian pasta dish from Rome made with egg, hard cheese, cured pork, and black pepper. ... The cheese is usually Pecorino Romano, Parmigiano-Reggiano, or a combination of the two. Spaghetti is the most common pasta, but fettuccine, rigatoni, linguine, or bucatini are also used.</p>
            <span> £12.50</span>
          
          <h3>Bolognese</h3>
          <p>Outside Italy, the phrase "Bolognese sauce" is often used to refer to a tomato-based sauce to which minced meat has been added; such sauces typically bear little resemblance to the Italian ragù alla bolognese, being more similar in fact to the ragù alla napoletana from the tomato-rich south of the country.
          </p>
          <span> £13.50</span>
          
          <h3>Arrabiata<span> £13.50</span>
          </h3>
          <h3>ketchup<span> £13.50</span>
          </h3>
        </div>
      </div>
      
      <h2>Desserts</h2>
      <div className={menuStyles.dish}>
        <div className={menuStyles.pasta}>
          <h3 >Tiramisu</h3>
          <p>Cake with Coffee and MAscarpone blah blah</p>
        </div>
        <div>
          <h4>extras</h4>
          <p>
            plain<span> £12.50</span>
          </p>
          <p>Crean<span> £13.50</span>
          </p>
          <p>Ice cream<span> £13.50</span>
          </p>
          <p>ketchup<span> £13.50</span>
          </p>
        </div>
      </div>
      <h2>appetisers</h2>
      <div className={menuStyles.dish}>
        <div className={menuStyles.pasta}>
          <h3 >Calamare</h3>
          <p>Fried and it taste disgusting.</p>
        </div>
        <div>
          <h4>Sides</h4>
          <p> on it's own<span> £12.50</span>
          </p>
          <p>salad<span> £13.50</span>
          </p>
          <p>garlic bread<span> £13.50</span>
          </p>

        </div>
      </div>
     </div>  
  )
}
    
export default MenuStrada
