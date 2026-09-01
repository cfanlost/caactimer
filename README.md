# CAACTimer 🛩️

> CAAC 无人机地面站实操考试离线倒计时工具

[![Release](https://img.shields.io/badge/release-v1.2.0-blue.svg)](../../releases)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey.svg)]()

## 📖 简介

CAACTimer 是一款专为 CAAC 无人机地面站实操考试打造的纯本地倒计时终端。严格还原考场 6 分钟标准时长、关键节点语音播报及强制交卷锁定流程，帮助考生在无网络环境下进行高仿真模考训练。

## ✨ 核心功能

- ⏱️ **标准时长**：固定 06:00 STD 考试计时，精准控时
- 🔊 **语音播报**：3 分钟 / 1 分钟关键节点自动语音提醒
- 🛡️ **交卷锁定**：计时归零后全屏遮罩锁定，模拟真实强制交卷
- 🔒 **纯离线运行**：零网络请求、零数据上传，断网可用
- 📊 **成绩记录**：基于 LocalStorage 自动保存历史模考用时
- ⚡ **轻量免装**：体积 < 5MB，解压即用，无需安装依赖

## 📸 界面截图

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="assets/main-ui.png" alt="倒计时主界面" width="400" />
        <br/><em>HUD 风格倒计时主界面</em>
      </td>
      <td align="center">
        <img src="assets/lock-screen.png" alt="交卷锁定界面" width="400" />
        <br/><em>计时结束自动锁定遮罩</em>
      </td>
    </tr>
  </table>
</div>

## 🚀 快速开始

### 下载安装

1. 前往 [Releases 页面](../../releases) 下载最新版 `CAACTimer_v1.2.0.zip`
2. 解压至任意目录（无需安装）
3. 双击运行对应平台可执行文件：
   - Windows: `CAACTimer.exe`
   
### 使用说明

| 操作 | 说明 |
| :--- | :--- |
| 开始模考 | 点击主界面「开始模考」按钮，进入 6 分钟倒计时 |
| 语音提醒 | 开始考试、剩余 3 分钟、1 分钟时自动播放语音提示 |
| 超时锁定 | 时间归零后界面自动全屏锁定，按 `ESC` 退出 |
| 查看成绩 | 点击「历史记录」查看过往模考用时 |
| 清除记录 | 在历史记录面板点击「清空」重置所有数据 |


## 📦 项目结构
