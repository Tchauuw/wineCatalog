import React from 'react'

import logo from '../assets/logo.png'

const App = () => {
    return <>
        <nav fx="">
            <header>
                <a href="/"><img src={logo} alt="React-Wines logo" /></a>
            </header>
            <div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Random</a>
                    </li>
                    <li>
                        <a href="/">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
        <main>
            <section data-name="review">
                <h2>Nouveau</h2>
                <h3>Henry Fessy 2012 Nouveau  (Beaujolais)</h3>
                <p>
                    Price : <b>9 $</b>
                </p>
                <blockquote>
                    <p>
                        This is a festive wine, with soft, ripe fruit and acidity, plus a red berry flavor.
                    </p>
                    <p txt="r">
                        <i>- Roger Voss</i>
                    </p>
                </blockquote>
            </section>
            <section data-name="review-list">
                <div className="hidden">
                    <h4>Categories</h4>
                    <p>
                        <select>
                            <option value="">All</option>
                            <option value="bordeaux">Bordeaux</option>
                            <option value="cotes-du-rhone">Côtes du Rhone</option>
                        </select>
                    </p>
                </div>
                <grid>
                    <div col="1/2">
                        <card>
                            <a href="/">
                                <h5>Yvon Mau 2008 Seigneurs de Bergerac Rosé (Bergerac)</h5>
                                <p>83 / 100</p>
                            </a>
                        </card>
                    </div>
                    <div col="1/2">
                        <card>
                            <a href="/">
                                <h5>Château Tour des Gendres 2016 Vigne d'Albert Red (Bergerac)</h5>
                                <p>87 / 100</p>
                            </a>
                        </card>
                    </div>
                    <div col="1/1" txt="c" className="hidden">
                        <card>
                            <a href="/"><h5>Add a review</h5></a>
                        </card>
                    </div>
                </grid>
            </section>
        </main>
        <footer>
            <p>La Rochelle Université</p>
        </footer>
    </>
}

export default App