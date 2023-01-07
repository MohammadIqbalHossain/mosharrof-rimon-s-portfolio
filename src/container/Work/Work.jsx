import React from 'react'

import './Work.scss';

function Work() {
  return (
    <div>
      <div class="message">
        Sorry, your browser does not support CSS Grid. 😅
      </div>
      <section class="section">
        <h1>Please visit my projects</h1>
        <div class="grid">
          <div class="item">
            <a href="https://moskbite.com/products/children-double-bed-bunk-sleeper" target="_blank" class="item__details">
              Moskbite Shop
            </a>
          </div>
          <a href="https://moskbite.com/products/children-double-bed-bunk-sleeper" target="_blank" class="item item--large">
            <span class="item__details">
              Moskbite shop
            </span>
          </a>
          <div class="item item--medium">
            <div class="item__details">
              sesame snaps chocolate
            </div>
          </div>
          <div class="item item--large">
            <div class="item__details">
              Oat cake
            </div>
          </div>
          <div class="item item--full">
            <div class="item__details">
              jujubes cheesecake
            </div>
          </div>
          <div class="item item--medium">
            <div class="item__details">
              Dragée pudding brownie
            </div>
          </div>
          <div class="item item--large">
            <div class="item__details">
              Oat cake
            </div>
          </div>
          <div class="item">
            <div class="item__details">
              powder toffee
            </div>
          </div>
          <div class="item item--medium">
            <div class="item__details">
              pudding cheesecake
            </div>
          </div>
          <div class="item item--large">
            <div class="item__details">
              toffee bear claw
            </div>
          </div>
          <div class="item">
            <div class="item__details">
              cake cookie croissant
            </div>
          </div>
          <div class="item item--medium">
            <div class="item__details">
              liquorice sweet roll
            </div>
          </div>
          <div class="item item--medium">
            <div class="item__details">
              chocolate marzipan
            </div>
          </div>
          <div class="item item--large">
            <div class="item__details">
              danish dessert lollipop
            </div>
          </div>
          <div class="item">
            <div class="item__details">
              sugar plum dragée
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Work