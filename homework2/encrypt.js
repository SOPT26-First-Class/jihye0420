//내장 모듈사용
const crypto = require('crypto');
//암호화 하는 코드!
const encrypt = (salt, password) => {
    //이 pbkdf2의 메소드->(비밀번호, 솔트 값, 반복 횟수, 출력 byte, 해시 알고리즘, callback함수)
    crypto.pbkdf2(password, salt.toString(), 1, 32, 'sha512', (err, derivedKey) => {
        if (err) throw err;
        const hashed = derivedKey.toString('hex');
        console.log('salt : ', salt);
        console.log('hashed : ', hashed);
    });
}

const password = 'fl0wer';
const salt = crypto.randomBytes(32).toString('hex');
encrypt(salt, password);