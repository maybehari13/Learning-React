import React from 'react'

const Third = () => {

    const arrayList = [
        `Walk Dog`,
        `Do Dishes`,
        `Mow Lawn`
    ]

    const listItems = arrayList.map(
        (item, index) => <li key={index}>{item}</li>
    )

  return (
    <ol>
        {listItems}
    </ol>
  )
}

export default Third