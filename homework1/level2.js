//1차 세미나 과제-황지혜
var our = [{
        name: '황지혜',
        age: 22
    },
    {
        name: '홍준엽',
        age: 26
    },
    {
        name: '이유영',
        age: 24
    },
    {
        name: '신윤재',
        age: 26
    }
];

our.forEach(
    p => console.log('우리팀 ' + p.name + '의 나이는' + p.age + '이다!')
);