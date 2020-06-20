const fs = require('fs');

fs.readFile("./password.txt", (err, data) => {
    if (err) return console.log(err.message);
    console.log(`password.txt 파일에는 아래의 데이터가 있습니다. \n"${data}"\n`);

    const crypto = require('crypto');
    const password = data.toString();
    const salt = crypto.randomBytes(32).toString('hex');
    //암호화 하는 코드!
    const encrypt = (salt, password) => {
        //이 pbkdf2의 메소드->(비밀번호, 솔트 값, 반복 횟수, 출력 byte, 해시 알고리즘, callback함수)
        crypto.pbkdf2(password, salt.toString(), 1, 32, 'sha512', (err, derivedKey) => {
            if (err) throw err;
            const hashed = derivedKey.toString('hex');
            console.log('salt : ', salt);
            console.log('hashed : ', hashed);

            fs.writeFile(`./hashed.txt`, hashed, (err, hashed) => {
                if (err) return console.log(err.message);
                //console.log(`${hashed}`);
            });
        });
    }
    encrypt(salt, password);

})




