import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <h1>
        Welcome to Mock Grocery Store App!
      </h1>
      <p>
      Discover the convenience of grocery shopping at your fingertips with our user-friendly application.<br/>
      Whether you&apos;re stocking up on essentials or exploring new products, we&apos;ve got you covered.
      </p>
      <br/>
      <h2>Features Include:</h2>
      <div className='hero-features'>
        <div className='hero-features-left'>
        <h3>
          Effortless Product Search
        </h3>
        <p>
          Looking for a specific item? Our powerful search feature allows you to effortlessly find products tailored to your needs.<br/>
          With just a few taps, access an organized list of results, making your shopping experience seamless and efficient.
        </p>
        <h3>
          Build Your Cart
        </h3>
        <p>
          Add items to your virtual cart with a simple click.<br/>
          Whether it&apos;s groceries for the week or last-minute essentials, our app makes it easy to compile your shopping list and keep track of your selections.
        </p>
        <h3>
          Customize Your Cart
        </h3>
        <p>
          Oops, changed your mind? No problem!<br/>
          Remove items from your cart with ease, ensuring you have complete control over your shopping experience.
        </p>
      </div>
      <div className='hero-features-right'>
        <h3>
          Seamless &quot;Purchase&quot; Process
        </h3>
        <p>
        Ready to check out? Initiate a &quot;purchase&quot; for the items in your cart.<br/>
        While you won&apos;t actually be completing a transaction, our app guides you through the process effortlessly, providing a glimpse into the smooth checkout experience.
        </p>
        <h3>
          Confirmation Page
        </h3>
        <p>
          Celebrate your virtual shopping success!<br/>
          After &quot;purchasing&quot; your items, you&apos;ll be directed to a confirmation page where you can review your selected products.<br/>
          Its the perfect way to wrap up your shopping adventure and ensure you haven&apos;t missed anything.
        </p>
        <br/>
        <p>
        Join us on Mock Grocery Store App today and revolutionize the way you shop for groceries.
        Convenience, efficiency, and a touch of joy await you!
      </p>
      </div>
    </div>
  </div>
  )
}

export default Hero