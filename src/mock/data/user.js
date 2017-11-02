import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: 'admin',
    avatar: 'http://oq6zg0oj1.bkt.clouddn.com/55.jpg',
    name: '欢迎登入'
  }
];


const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
      mobile:/^1[0-9]{10}$/,
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}
console.dir(Users)

export { LoginUsers, Users };
