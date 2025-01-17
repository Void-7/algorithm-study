// 哈希函数:将键转换为索引 空间换时间
// 键通过哈希函数得到的索引分布越均匀越好

// 常见的哈希函数:取模,模一个素数
// 原则:
// 1.一致性 key相等则value相等
// 2.高效性
// 3.均匀性 哈希值均匀分布

// 哈希冲突的处理
// seperate chaining （链地址法）
// 开放地址法 重新尝试/二次哈希/平方探测
