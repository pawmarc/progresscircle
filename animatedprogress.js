const numbers = document.querySelectorAll('.number');
const speed = 50;
let count = 0;

// const svgAnimatedCircles = document.querySelectorAll('svg circle:last-of-type');
// console.log(svgAnimatedCircles);

numbers.forEach(number => {
    const updateCount = () => {
        const target = +number.getAttribute('data-target');

        const inc = target / speed;
        console.log(target);
        let html = `
        <h3>${count.toFixed(0)}<span>%</span></h3>
        `;

        const circle = number.closest('.percent').querySelector('circle:last-of-type');
        console.log(circle);

        if (count < target) {
            setTimeout(updateCount, speed);
            console.log(count, inc, target);
            count += inc;
            circle.setAttribute('style', `--percent: ${count}`)
            number.innerHTML = html;
        }
        else {
            html = `
            <h3>${target.toFixed(0)}<span>%</span></h3>
            `;
            number.innerHTML = html;
        }

    }

    updateCount();
})