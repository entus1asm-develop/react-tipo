

function Main({counter, minus, plus}) {

    return (
        <main>    

            <h1>{counter}</h1>
            <button onClick={() => minus()}>-</button>
            <button onClick={() => plus()}>+</button>
            <img src="https://www.meme-arsenal.com/memes/fae2365a7d022b91517aef0d03ce3c8d.jpg" alt="lol" />
        </main>
    )
}

export default Main;