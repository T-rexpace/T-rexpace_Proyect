import React from "react"

function Star(props) {
  return (
    <svg width={29} height={27} fill="none" {...props}>
      <path
        d="M11.104 8.99l3.453-6.763 3.336 6.743a1.9 1.9 0 001.44 1.04l7.462 1.044-5.413 5.092a1.9 1.9 0 00-.569 1.712l1.281 7.319-6.648-3.465a1.9 1.9 0 00-1.745-.006l-6.798 3.487 1.284-7.335a1.9 1.9 0 00-.57-1.712l-5.412-5.092 7.47-1.045a1.9 1.9 0 001.429-1.018z"
        stroke="#4B3866"
        strokeWidth={2}
      />
    </svg>
  )
}

export default Star
