import React from 'react'

const CardSvg = (color) => {
  return (
    <svg fill= {color} width="576" height="342" viewBox="0 0 576 342" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1408_685)">
        <mask id="path-1-inside-1_1408_685" fill="white">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M568 18C568 12.4772 563.523 8 558 8H18C12.4772 8 8 12.4772 8 18V324C8 329.523 12.4771 334 18 334H558C563.523 334 568 329.523 568 324V18ZM512.5 16C486.819 16 466 36.8188 466 62.5C466 88.1812 486.819 109 512.5 109C538.181 109 559 88.1812 559 62.5C559 36.8188 538.181 16 512.5 16Z"/>
        </mask>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M568 18C568 12.4772 563.523 8 558 8H18C12.4772 8 8 12.4772 8 18V324C8 329.523 12.4771 334 18 334H558C563.523 334 568 329.523 568 324V18ZM512.5 16C486.819 16 466 36.8188 466 62.5C466 88.1812 486.819 109 512.5 109C538.181 109 559 88.1812 559 62.5C559 36.8188 538.181 16 512.5 16Z" fill="url(#paint0_linear_1408_685)" shape-rendering="crispEdges"/>
        <path d="M18 9H558V7H18V9ZM9 324V18H7V324H9ZM558 333H18V335H558V333ZM567 18V324H569V18H567ZM467 62.5C467 37.371 487.371 17 512.5 17V15C486.266 15 465 36.2665 465 62.5H467ZM512.5 108C487.371 108 467 87.629 467 62.5H465C465 88.7335 486.266 110 512.5 110V108ZM558 62.5C558 87.629 537.629 108 512.5 108V110C538.734 110 560 88.7335 560 62.5H558ZM512.5 17C537.629 17 558 37.371 558 62.5H560C560 36.2665 538.734 15 512.5 15V17ZM558 335C564.075 335 569 330.075 569 324H567C567 328.971 562.971 333 558 333V335ZM7 324C7 330.075 11.9249 335 18 335V333C13.0294 333 9 328.971 9 324H7ZM558 9C562.971 9 567 13.0294 567 18H569C569 11.9249 564.075 7 558 7V9ZM18 7C11.9249 7 7 11.9249 7 18H9C9 13.0294 13.0294 9 18 9V7Z" fill="#5A5A5A" mask="url(#path-1-inside-1_1408_685)"/>
        </g>
        <defs>
        <filter id="filter0_d_1408_685" x="0" y="0" width="576" height="342" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="4"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1408_685"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1408_685" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_1408_685" x1="288" y1="8" x2="288" y2="368" gradientUnits="userSpaceOnUse">
        <stop stop-color="#D9D9D9" stop-opacity="0.12"/>
        <stop offset="1" stop-color="#737373" stop-opacity="0.13"/>
        </linearGradient>
        </defs>
</svg>

  )
}

export default CardSvg
