import React from "react"

function Close(props) {
  return (
    <svg width={28} height={27} fill="none" {...props}>
      <path
        stroke="#4B3866"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.414 2L26 25.586M25.586 2L2 25.586"
      />
    </svg>
  )
}

export default Close
