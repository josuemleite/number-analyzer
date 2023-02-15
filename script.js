let num = document.querySelector('input#formNumber')
let list = document.querySelector('select#formList')
let res = document.querySelector('div#res')
let values = []

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function addNumber() {
  if (isNumber(num.value) && !inList(num.value, values)) {
    values.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Added value ${num.value}`
    list.appendChild(item)
    res.innerHTML = ''
  } else {
    window.alert('Invalid value or already found in list!')
  }
  num.value = ''
  num.focus()
}

function finalize() {
  if (values.length == 0) {
    window.alert('Add values before finalizing!')
  } else {
    let total = values.length
    let highest = values[0]
    let smaller = values[0]
    let sum = 0
    let avg = 0

    for (let pos in values) {
      sum += values[pos]
      if (values[pos] > highest) {
        highest = values[pos]
      }
      if (values[pos] < smaller) {
        smaller = values[pos]
      }
    }

    avg = sum / total

    res.innerHTML = ''
    res.innerHTML += `<p>In all, we have ${total} numbers registered.</p>`
    res.innerHTML += `<p>The highest value reported was ${highest}.</p>`
    res.innerHTML += `<p>The smallest value reported was ${smaller}.</p>`
    res.innerHTML += `<p>Adding all the values, we have a total of ${sum}.</p>`
    res.innerHTML += `<p>The average of the values is ${avg}.</p>`
  }
}
