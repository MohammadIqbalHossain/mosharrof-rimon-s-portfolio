import React from 'react'
import './Pricing.scss';

function Pricing() {
    return (
        <div>
            <div class="price-table-wrapper">
                <div class="pricing-table">
                    <h2 class="pricing-table__header">- BASIC -</h2>
                    <h3 class="pricing-table__price">£50</h3>
                    <a target="_blank" class="pricing-table__button" href="http://www.digimadmedia.com">
                        Join Now!
                    </a>
                    <ul class="pricing-table__list">
                        <li>30 day free trial</li>
                        <li>50gb storage space</li>
                        <li>20% discount</li>
                        <li>24 hour support</li>
                    </ul>
                </div>
                <div class="pricing-table featured-table">
                    <h2 class="pricing-table__header">- BUSINESS -</h2>
                    <h3 class="pricing-table__price">£80</h3>
                    <a target="_blank" class="pricing-table__button" href="http://www.digimadmedia.com">
                        Join Now!
                    </a>
                    <ul class="pricing-table__list">
                        <li>40 day free trial</li>
                        <li>100gb storage space</li>
                        <li>25% discount</li>
                        <li>24 hour support</li>
                    </ul>
                </div>
                <div class="pricing-table">
                    <h2 class="pricing-table__header">- PREMIUM -</h2>
                    <h3 class="pricing-table__price">£130</h3>
                    <a target="_blank" class="pricing-table__button" href="http://www.digimadmedia.com">
                        Join Now!
                    </a>
                    <ul class="pricing-table__list">
                        <li>50 day free trial</li>
                        <li>200gb storage space</li>
                        <li>40% discount</li>
                        <li>24 hour support</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pricing