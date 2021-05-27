const squares = document.querySelectorAll('.grafic')
const info = document.querySelector('p')
const progress = document.querySelector('#sp1')
let x = []
let arr = new Array()

function rangeArr(start, end, step = 1) {
    const length = Math.floor(Math.abs((end - start) / step)) + 1;

    return Array.from(Array(length), (x, index) => start + index * step);
}
arr.push(rangeArr(0, 99, 4));
const rengeVip = () => {

    let i = 0
    while (i < 4) {

        let draw = arr[0][Math.floor(Math.random() * (arr[0].length - 1))]

        arr[0].forEach((el, index) => {

            if (el == draw) {
                arr[0].splice(index, 1);
            }
        })

        function range(start, end) {
            for (var i = start; i <= end; i++) {
                x.push(i);
            }
            return x;
        }

        range(draw, draw + 3)
        
        i++
    }
}
rengeVip()

squares.forEach((el, index) => {

    for (j = 0; j < x.length; j++) {
        if (index == x[j]) {
            el.classList.add('ship')
        }
    }

    el.addEventListener('click', (e) => {

        if (e.target.classList.contains('ship')) {
            el.style.backgroundColor = `#FF6F00`
            info.innerHTML += `[${e.target.dataset.x},${e.target.dataset.y}]: Hit!<br/> `;
            e.target.classList.remove('ship')
            e.target.classList.add('active')
            x.pop()
            progress.innerHTML = 'Ilość jednostek: ' + x.length;

            if (x.length === 0) {
                info.innerHTML = 'Win !'
                info.style.color = 'yellow'
                info.style.fontSize = '2rem'
            }

        } else {
            e.target.classList.add('mishit')
            info.innerHTML += `[${e.target.dataset.x},${e.target.dataset.y}]: Mishit!<br/> `;
        }
    })
})