export default {
  async fetch(request) {
    return new Response(getHTML(), {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
      },
    });
  },
};

function getHTML() {
  return `<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的大學進化藍圖 | University Evolution Blueprint</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #667eea;
            --secondary: #764ba2;
            --accent: #f093fb;
            --dark: #1a202c;
            --light: #f7fafc;
            --success: #48bb78;
            --warning: #ed8936;
        }

        body {
            font-family: 'Segoe UI', 'Microsoft JhengHei', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: var(--dark);
            overflow-x: hidden;
            line-height: 1.6;
        }

        /* 粒子背景 */
        #particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            opacity: 0.3;
        }

        .particle {
            position: absolute;
            background: white;
            border-radius: 50%;
            animation: float 15s infinite;
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(50px);
                opacity: 0;
            }
        }

        /* 主容器 */
        .container {
            position: relative;
            z-index: 1;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        /* 標題區 */
        header {
            text-align: center;
            padding: 60px 20px;
            color: white;
            animation: fadeInDown 1s ease-out;
        }

        h1 {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 20px;
            text-shadow: 2px 2px 20px rgba(0,0,0,0.3);
            letter-spacing: 2px;
        }

        .subtitle {
            font-size: 1.5rem;
            opacity: 0.95;
            font-weight: 300;
            margin-top: 10px;
        }

        .department {
            display: inline-block;
            background: rgba(255,255,255,0.2);
            padding: 10px 30px;
            border-radius: 50px;
            margin-top: 20px;
            font-size: 1.1rem;
            backdrop-filter: blur(10px);
        }

        /* 導航標籤 */
        .nav-tabs {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin: 40px 0;
            flex-wrap: wrap;
        }

        .tab-button {
            background: rgba(255,255,255,0.9);
            border: none;
            padding: 15px 30px;
            border-radius: 50px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
            transition: all 0.3s ease;
            color: var(--dark);
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .tab-button:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.2);
            background: white;
        }

        .tab-button.active {
            background: linear-gradient(135deg, var(--accent), var(--secondary));
            color: white;
            transform: scale(1.05);
        }

        /* 卡片容器 */
        .cards-container {
            display: grid;
            gap: 30px;
            margin-bottom: 50px;
        }

        /* 卡片樣式 */
        .card {
            background: white;
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
            animation: fadeInUp 0.8s ease-out;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
        }

        .card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 5px;
            height: 100%;
            background: linear-gradient(180deg, var(--primary), var(--secondary));
        }

        .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }

        .card-icon {
            font-size: 3rem;
            margin-bottom: 20px;
            display: inline-block;
            animation: bounce 2s infinite;
        }

        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .card h2 {
            color: var(--primary);
            font-size: 2rem;
            margin-bottom: 15px;
            font-weight: 700;
        }

        .card h3 {
            color: var(--secondary);
            font-size: 1.3rem;
            margin: 25px 0 10px 0;
            font-weight: 600;
        }

        .card p, .card li {
            color: #4a5568;
            font-size: 1.05rem;
            margin: 10px 0;
            line-height: 1.8;
        }

        .card ul {
            list-style: none;
            padding-left: 0;
        }

        .card li {
            padding: 8px 0 8px 30px;
            position: relative;
        }

        .card li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: var(--primary);
            font-weight: bold;
            font-size: 1.2rem;
        }

        /* 標籤 */
        .tag {
            display: inline-block;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            margin: 5px 5px 5px 0;
            font-weight: 600;
        }

        /* 進度條 */
        .progress-bar {
            background: #e2e8f0;
            height: 10px;
            border-radius: 10px;
            overflow: hidden;
            margin: 10px 0;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--primary), var(--accent));
            border-radius: 10px;
            transition: width 2s ease;
        }

        /* 時間軸 */
        .timeline {
            position: relative;
            padding: 20px 0;
        }

        .timeline-item {
            position: relative;
            padding-left: 40px;
            margin: 30px 0;
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            left: 10px;
            top: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(180deg, var(--primary), var(--accent));
        }

        .timeline-item::after {
            content: '';
            position: absolute;
            left: 5px;
            top: 5px;
            width: 12px;
            height: 12px;
            background: var(--primary);
            border-radius: 50%;
            box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.2);
        }

        /* 結語區 */
        .conclusion {
            background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.9));
            border-radius: 20px;
            padding: 50px;
            text-align: center;
            margin: 50px 0;
            box-shadow: 0 20px 60px rgba(0,0,0,0.15);
            border: 3px solid rgba(102, 126, 234, 0.3);
        }

        .conclusion h2 {
            font-size: 2.5rem;
            color: var(--secondary);
            margin-bottom: 30px;
            font-weight: 800;
        }

        .conclusion p {
            font-size: 1.2rem;
            line-height: 2;
            color: var(--dark);
            max-width: 900px;
            margin: 0 auto 20px;
        }

        .conclusion .highlight {
            color: var(--primary);
            font-weight: 700;
            font-size: 1.3rem;
        }

        /* 頁尾 */
        footer {
            text-align: center;
            padding: 40px;
            color: white;
            font-size: 0.9rem;
            opacity: 0.8;
        }

        /* 動畫 */
        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* 隱藏未激活的內容 */
        .content-section {
            display: none;
        }

        .content-section.active {
            display: block;
        }

        /* 響應式設計 */
        @media (max-width: 768px) {
            h1 {
                font-size: 2.5rem;
            }

            .subtitle {
                font-size: 1.2rem;
            }

            .card {
                padding: 30px 20px;
            }

            .conclusion {
                padding: 30px 20px;
            }

            .nav-tabs {
                gap: 5px;
            }

            .tab-button {
                padding: 10px 20px;
                font-size: 0.9rem;
            }

            .mode-switch {
                top: 10px;
                right: 10px;
                flex-direction: column;
                gap: 5px;
            }

            .mode-button {
                padding: 8px 15px;
                font-size: 0.85rem;
            }

            .mindmap-center {
                padding: 30px;
                font-size: 1.2rem;
                min-width: 150px;
                min-height: 150px;
            }

            .mindmap-node.level-1 {
                padding: 15px 20px;
                font-size: 1rem;
                min-width: 140px;
            }

            /* 手機版心智圖調整 */
            .branch-1 { top: -120px; }
            .branch-2 { right: -150px; top: 30px; }
            .branch-3 { right: -150px; bottom: 30px; }
            .branch-4 { bottom: -120px; }
            .branch-5 { left: -150px; bottom: 30px; }
            .branch-6 { left: -150px; top: 30px; }

            .line-top { height: 120px; top: -120px; }
            .line-right-top { width: 150px; right: -150px; }
            .line-right-bottom { width: 150px; right: -150px; }
            .line-bottom { height: 120px; bottom: -120px; }
            .line-left-bottom { width: 150px; left: -150px; }
            .line-left-top { width: 150px; left: -150px; }
        }

        /* 特效：數字動畫 */
        .stat-number {
            font-size: 3rem;
            font-weight: 800;
            color: var(--primary);
            display: block;
            margin: 10px 0;
        }

        /* 網格布局 */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }

        .stat-card {
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
            padding: 25px;
            border-radius: 15px;
            text-align: center;
            border: 2px solid rgba(102, 126, 234, 0.2);
        }

        .quote {
            font-style: italic;
            font-size: 1.1rem;
            color: #718096;
            padding: 20px;
            border-left: 4px solid var(--primary);
            background: rgba(102, 126, 234, 0.05);
            margin: 20px 0;
            border-radius: 0 10px 10px 0;
        }

        /* 模式切換按鈕 */
        .mode-switch {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            display: flex;
            gap: 10px;
        }

        .mode-button {
            background: white;
            border: 2px solid var(--primary);
            padding: 10px 20px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            color: var(--primary);
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .mode-button:hover {
            background: var(--primary);
            color: white;
            transform: translateY(-2px);
        }

        .mode-button.active {
            background: var(--primary);
            color: white;
        }

        /* 心智圖樣式 */
        #mindmap {
            display: none;
            padding: 40px 20px;
            overflow-x: auto;
            min-height: 80vh;
        }

        #mindmap.active {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .mindmap-container {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            width: 100%;
            max-width: 1600px;
            min-height: 600px;
        }

        .mindmap-center {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 40px 60px;
            border-radius: 50%;
            font-size: 1.5rem;
            font-weight: 800;
            box-shadow: 0 15px 50px rgba(102, 126, 234, 0.5);
            cursor: pointer;
            transition: all 0.4s ease;
            z-index: 10;
            position: absolute;
            text-align: center;
            min-width: 200px;
            min-height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .mindmap-center:hover {
            transform: scale(1.1);
            box-shadow: 0 20px 60px rgba(102, 126, 234, 0.7);
        }

        .mindmap-branches {
            position: relative;
            width: 100%;
            height: 100%;
        }

        .mindmap-branch {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: all 0.3s ease;
        }

        /* 六個分支的位置 */
        .branch-1 { top: -150px; left: 50%; transform: translateX(-50%); }
        .branch-2 { top: 50px; right: -200px; }
        .branch-3 { bottom: 50px; right: -200px; }
        .branch-4 { bottom: -150px; left: 50%; transform: translateX(-50%); }
        .branch-5 { bottom: 50px; left: -200px; }
        .branch-6 { top: 50px; left: -200px; }

        .mindmap-node {
            background: white;
            padding: 20px 30px;
            border-radius: 20px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.15);
            cursor: pointer;
            transition: all 0.3s ease;
            border: 3px solid transparent;
            margin: 10px 0;
            position: relative;
        }

        .mindmap-node:hover {
            transform: scale(1.1);
            box-shadow: 0 10px 40px rgba(0,0,0,0.25);
            border-color: var(--primary);
            z-index: 5;
        }

        .mindmap-node.level-1 {
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--secondary);
            border: 3px solid var(--primary);
            min-width: 180px;
            text-align: center;
        }

        .mindmap-node.level-1:hover {
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
        }

        /* 連接線 */
        .mindmap-line {
            position: absolute;
            background: linear-gradient(90deg, var(--primary), var(--accent));
            z-index: 1;
        }

        /* 不同方向的連接線 */
        .line-top { width: 2px; height: 150px; left: 50%; top: -150px; }
        .line-right-top { width: 200px; height: 2px; right: -200px; top: 50%; }
        .line-right-bottom { width: 200px; height: 2px; right: -200px; bottom: 50%; }
        .line-bottom { width: 2px; height: 150px; left: 50%; bottom: -150px; }
        .line-left-bottom { width: 200px; height: 2px; left: -200px; bottom: 50%; }
        .line-left-top { width: 200px; height: 2px; left: -200px; top: 50%; }

        /* 節點資訊提示 */
        .node-tooltip {
            position: absolute;
            background: rgba(0,0,0,0.9);
            color: white;
            padding: 10px 15px;
            border-radius: 8px;
            font-size: 0.9rem;
            white-space: nowrap;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 100;
            top: -40px;
            left: 50%;
            transform: translateX(-50%);
        }

        .mindmap-node:hover .node-tooltip {
            opacity: 1;
        }

        /* 互動彩蛋 */
        .easter-egg {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, var(--accent), var(--secondary));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            cursor: pointer;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
            z-index: 999;
            animation: pulse 2s infinite;
        }

        .easter-egg:hover {
            transform: scale(1.2) rotate(360deg);
        }

        @keyframes pulse {
            0%, 100% {
                box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            }
            50% {
                box-shadow: 0 5px 40px rgba(240, 147, 251, 0.6);
            }
        }

        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            z-index: 10000;
            justify-content: center;
            align-items: center;
        }

        .modal.active {
            display: flex;
        }

        .modal-content {
            background: white;
            padding: 40px;
            border-radius: 20px;
            max-width: 500px;
            text-align: center;
            animation: fadeInUp 0.5s ease;
        }

        .modal-content h2 {
            color: var(--primary);
            margin-bottom: 20px;
        }

        .modal-content button {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            margin-top: 20px;
            transition: all 0.3s ease;
        }

        .modal-content button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
    </style>
</head>
<body>
    <!-- 粒子背景 -->
    <div id="particles"></div>

    <!-- 模式切換按鈕 -->
    <div class="mode-switch">
    </div>

    <!-- 互動彩蛋 -->
    <div class="easter-egg" onclick="showEasterEgg()">🎉</div>

    <!-- 彩蛋彈窗 -->
    <div id="modal" class="modal">
        <div class="modal-content">
            <h2>🎊 隱藏訊息解鎖！</h2>
            <p style="font-size: 1.2rem; line-height: 1.8; margin: 20px 0;">
                如果你看到這個訊息，代表你發現了小驚喜！<br><br>
                老師，謝謝您花時間看我的計劃書。<br>
                網頁程式碼：<br>
                希望這個網頁能讓您看到我大學的計畫 😊
            </p>
            <button onclick="closeModal()">關閉</button>
        </div>
    </div>

    <div class="container">
        <!-- 標題區 -->
        <header>
            <h1>🎓 我的大學進化藍圖</h1>
            <div class="subtitle">University Evolution Blueprint</div>
            <div class="department">林承諺 | 國立台北科技大學 電機一甲</div>
        </header>

        <!-- 導航標籤 -->
        <div class="nav-tabs" id="list-mode">
            <button class="tab-button active" onclick="showSection('overview', this)">📊 總覽</button>
            <button class="tab-button" onclick="showSection('professional', this)">💼 專業領域</button>
            <button class="tab-button" onclick="showSection('activities', this)">🎸 社團活動</button>
            <button class="tab-button" onclick="showSection('engagement', this)">🌍 校外參與</button>
            <button class="tab-button" onclick="showSection('life', this)">🏫 校園生活</button>
            <button class="tab-button" onclick="showSection('relationships', this)">❤️ 感情生活</button>
            <button class="tab-button" onclick="showSection('direction', this)">🚀 人生方向</button>
        </div>

        <!-- 心智圖模式 -->
        <div id="mindmap">
            <div class="mindmap-container">
                <div class="mindmap-center" onclick="alert('🎓 林承諺的大學四年規劃\\n\\n六大領域全方位發展！')">
                    🎓<br>大學計劃書
                </div>
                
                <div class="mindmap-branches">
                    <!-- 連接線 -->
                    <div class="mindmap-line line-top"></div>
                    <div class="mindmap-line line-right-top"></div>
                    <div class="mindmap-line line-right-bottom"></div>
                    <div class="mindmap-line line-bottom"></div>
                    <div class="mindmap-line line-left-bottom"></div>
                    <div class="mindmap-line line-left-top"></div>

                    <!-- 上方：專業領域 -->
                    <div class="mindmap-branch branch-1">
                        <div class="mindmap-node level-1" onclick="switchMode('list'); setTimeout(() => showSection('professional'), 100);" 
                             onmouseover="this.innerHTML='💼 專業領域<br><small style=\\'font-size:0.8rem;\\'>GPA 3.8+ | Top 20%</small><div class=\\'node-tooltip\\'>點擊查看詳細內容</div>'"
                             onmouseout="this.innerHTML='💼 專業領域<div class=\\'node-tooltip\\'>點擊查看詳細內容</div>'">
                            💼 專業領域
                            <div class="node-tooltip">點擊查看詳細內容</div>
                        </div>
                    </div>

                    <!-- 右上：社團活動 -->
                    <div class="mindmap-branch branch-2">
                        <div class="mindmap-node level-1" onclick="switchMode('list'); setTimeout(() => showSection('activities'), 100);"
                             onmouseover="this.innerHTML='🎸 社團活動<br><small style=\\'font-size:0.8rem;\\'>吉他社 | 系學會</small><div class=\\'node-tooltip\\'>點擊查看詳細內容</div>'"
                             onmouseout="this.innerHTML='🎸 社團活動<div class=\\'node-tooltip\\'>點擊查看詳細內容</div>'">
                            🎸 社團活動
                            <div class="node-tooltip">點擊查看詳細內容</div>
                        </div>
                    </div>

                    <!-- 右下：校外參與 -->
                    <div class="mindmap-branch branch-3">
                        <div class="mindmap-node level-1" onclick="switchMode('list'); setTimeout(() => showSection('engagement'), 100);"
                             onmouseover="this.innerHTML='🌍 校外參與<br><small style=\\'font-size:0.8rem;\\'>打工 | 志工 | 實習</small><div class=\\'node-tooltip\\'>點擊查看詳細內容</div>'"
                             onmouseout="this.innerHTML='🌍 校外參與<div class=\\'node-tooltip\\'>點擊查看詳細內容</div>'">
                            🌍 校外參與
                            <div class="node-tooltip">點擊查看詳細內容</div>
                        </div>
                    </div>

                    <!-- 下方：校園生活 -->
                    <div class="mindmap-branch branch-4">
                        <div class="mindmap-node level-1" onclick="switchMode('list'); setTimeout(() => showSection('life'), 100);"
                             onmouseover="this.innerHTML='🏫 校園生活<br><small style=\\'font-size:0.8rem;\\'>時間管理 | 平衡</small><div class=\\'node-tooltip\\'>點擊查看詳細內容</div>'"
                             onmouseout="this.innerHTML='🏫 校園生活<div class=\\'node-tooltip\\'>點擊查看詳細內容</div>'">
                            🏫 校園生活
                            <div class="node-tooltip">點擊查看詳細內容</div>
                        </div>
                    </div>

                    <!-- 左下：感情生活 -->
                    <div class="mindmap-branch branch-5">
                        <div class="mindmap-node level-1" onclick="switchMode('list'); setTimeout(() => showSection('relationships'), 100);"
                             onmouseover="this.innerHTML='❤️ 感情生活<br><small style=\\'font-size:0.8rem;\\'>親情 | 友情 | 愛情</small><div class=\\'node-tooltip\\'>點擊查看詳細內容</div>'"
                             onmouseout="this.innerHTML='❤️ 感情生活<div class=\\'node-tooltip\\'>點擊查看詳細內容</div>'">
                            ❤️ 感情生活
                            <div class="node-tooltip">點擊查看詳細內容</div>
                        </div>
                    </div>

                    <!-- 左上：人生方向 -->
                    <div class="mindmap-branch branch-6">
                        <div class="mindmap-node level-1" onclick="switchMode('list'); setTimeout(() => showSection('direction'), 100);"
                             onmouseover="this.innerHTML='🚀 人生方向<br><small style=\\'font-size:0.8rem;\\'>研究所 | 職涯規劃</small><div class=\\'node-tooltip\\'>點擊查看詳細內容</div>'"
                             onmouseout="this.innerHTML='🚀 人生方向<div class=\\'node-tooltip\\'>點擊查看詳細內容</div>'">
                            🚀 人生方向
                            <div class="node-tooltip">點擊查看詳細內容</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 總覽區 -->
        <div id="overview" class="content-section active">
            <div class="cards-container">
                <div class="card">
                    <div class="card-icon">🎯</div>
                    <h2>核心目標一覽</h2>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <span class="stat-number">Top 20%</span>
                            <p>系排名目標</p>
                        </div>
                        <div class="stat-card">
                            <span class="stat-number">3.8+</span>
                            <p>GPA 目標</p>
                        </div>
                        <div class="stat-card">
                            <span class="stat-number">860+</span>
                            <p>多益金色證書</p>
                        </div>
                        <div class="stat-card">
                            <span class="stat-number">4年</span>
                            <p>蛻變旅程</p>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-icon">📍</div>
                    <h2>六大成長主軸</h2>
                    <div class="timeline">
                        <div class="timeline-item">
                            <h3>💼 專業領域</h3>
                            <p>透過扎實的學業基礎，打造電機工程的專業能力，為高薪職涯奠定根基</p>
                        </div>
                        <div class="timeline-item">
                            <h3>🎸 社團活動</h3>
                            <p>在吉他社與系學會中，培養領導力與團隊協作能力，豐富大學生活</p>
                        </div>
                        <div class="timeline-item">
                            <h3>🌍 校外參與</h3>
                            <p>透過工讀與志工服務，追求經濟獨立，實現從基隆到台北的獨立生活</p>
                        </div>
                        <div class="timeline-item">
                            <h3>🏫 校園生活</h3>
                            <p>在忙碌與悠閒間找到平衡，精進時間管理，保持身心健康</p>
                        </div>
                        <div class="timeline-item">
                            <h3>❤️ 感情生活</h3>
                            <p>經營親情、友情、愛情，建立成熟穩定的人際關係</p>
                        </div>
                        <div class="timeline-item">
                            <h3>🚀 人生方向</h3>
                            <p>朝著四大研究所邁進，成為理性、邏輯清晰、實事求是的工程師</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 專業領域 -->
        <div id="professional" class="content-section">
            <div class="cards-container">
                <div class="card">
                    <div class="card-icon">📚</div>
                    <h2>專業領域 Professional Field</h2>
                    
                    <div class="quote">
                        「當初選電機，老實說就是看上未來薪水不錯（笑）。但現在想想，能學到改變世界的技術，也挺酷的」
                    </div>

                    <h3>🎯 學業目標 Academic Goals</h3>
                    <ul>
                        <li><strong>系排名前 20%</strong> - 這樣推甄研究所才穩</li>
                        <li><strong>GPA 3.8+</strong> - 萬一以後想出國，GPA 要先顧好</li>
                        <li><strong>夢想目標：</strong>書卷獎（有獎學金耶！而且推甄超加分）</li>
                        <li><strong>務實一點：</strong>以我的程度，穩扎穩打比較實在</li>
                    </ul>

                    <h3>🌏 國際視野 Global Perspective</h3>
                    <ul>
                        <li>先把 GPA 顧好，之後想出國交換或留學才有本錢</li>
                        <li>培養跨國工作的競爭力</li>
                        <li>多看看外面的世界也不錯</li>
                    </ul>

                    <h3>🗣️ 語言能力 Language Skills</h3>
                    <ul>
                        <li><strong>現況：</strong>多益 600 分（還有進步空間...）</li>
                        <li><strong>目標：</strong>多益金色證書 (860+)</li>
                        <li><strong>為什麼？</strong>推甄要用、出國要用、看論文也要用</li>
                        <li>反正電機一堆英文資料，不如好好練一練</li>
                    </ul>

                    <h3>💡 核心動機 Core Motivation</h3>
                    <p style="font-size: 1.1rem; color: var(--primary); font-weight: 600; padding: 15px; background: rgba(102, 126, 234, 0.1); border-radius: 10px; margin-top: 15px;">
                        說白了，就是想把「賺大錢」這個很現實的目標，變成真正的專業能力。不是空想，是要實際去做到
                    </p>
                </div>
            </div>
        </div>

        <!-- 社團活動 -->
        <div id="activities" class="content-section">
            <div class="cards-container">
                <div class="card">
                    <div class="card-icon">🎸</div>
                    <h2>社團活動 Club Activities</h2>

                    <h3>🎵 興趣探索 Interest Exploration</h3>
                    <ul>
                        <li><strong>吉他社</strong>（還在考慮要不要加入...）</li>
                        <li>覺得會彈吉他很帥，但不確定時間夠不夠</li>
                        <li>理工生也要有點藝術氣息吧</li>
                        <li>培養一些專業以外的技能，平衡一下</li>
                    </ul>

                    <h3>👔 領導力培養 Leadership Development</h3>
                    <ul>
                        <li><strong>大二目標：</strong>去競選系學會幹部</li>
                        <li><strong>理想職位：</strong>系學會副會長（可以試試看）</li>
                        <li>學學怎麼帶團隊、辦活動</li>
                        <li>溝通能力跟解決問題的能力應該會進步</li>
                        <li>履歷上也會比較好看，推甄加分</li>
                    </ul>

                    <div class="quote">
                        「社團學到的軟實力，可能比課本上的公式更重要。畢竟出社會不是只要會算題目」
                    </div>

                    <h3>🤝 人脈建立 Networking</h3>
                    <ul>
                        <li>多認識不同系所的人，視野會比較廣</li>
                        <li>建立未來可以互相幫忙的人脈網</li>
                        <li>把「想交朋友」這件事，變成真正有用的資源</li>
                        <li>不只是玩玩，而是建立長期關係</li>
                    </ul>

                    <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1)); border-radius: 15px;">
                        <h3 style="color: var(--primary); margin-bottom: 15px;">社團時間規劃（預估）</h3>
                        <p><strong>吉他社：</strong>每週 2-3 小時（如果加入的話）</p>
                        <p><strong>系學會：</strong>大二開始，每週大概 4-6 小時</p>
                        <p><strong>預期收穫：</strong>領導經驗、認識更多人、學會辦活動</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 校外參與 -->
        <div id="engagement" class="content-section">
            <div class="cards-container">
                <div class="card">
                    <div class="card-icon">🌍</div>
                    <h2>校外參與 Off-Campus Engagement</h2>

                    <h3>💰 經濟獨立 Financial Independence</h3>
                    <ul>
                        <li><strong>現職：</strong>補習班機動輔導員（有需要才叫我去）</li>
                        <li><strong>目標工時：</strong>每週 8-14 小時就好</li>
                        <li><strong>大二計劃：</strong>搬到台北，自己付房租</li>
                        <li>每天通勤真的很浪費時間，想要改善</li>
                        <li>學著自己管錢、自己生活</li>
                    </ul>

                    <div class="stats-grid" style="margin: 30px 0;">
                        <div class="stat-card">
                            <span class="stat-number">2-3hr</span>
                            <p>每天通勤時間（累死）</p>
                        </div>
                        <div class="stat-card">
                            <span class="stat-number">8-14hr</span>
                            <p>希望的打工時數/週</p>
                        </div>
                    </div>

                    <div class="quote">
                        「從基隆到台北，不只是地理上的移動，更是從靠家裡到靠自己的過程」
                    </div>

                    <h3>💼 職涯探索 Career Exploration</h3>
                    <ul>
                        <li>有在追蹤學長姐的社群，看看有什麼實習機會</li>
                        <li>想找電機相關的實習，累積點實務經驗</li>
                        <li>多認識業界的人，了解一下實際工作是什麼樣子</li>
                        <li>把學校學的東西拿去實際用用看</li>
                    </ul>

                    <h3>🤲 社會回饋 Social Contribution</h3>
                    <ul>
                        <li>高中有做過服務，覺得蠻有意義的</li>
                        <li><strong>志工方向：</strong>可能去偏鄉教小朋友英文</li>
                        <li>用自己會的東西去幫助別人</li>
                        <li>培養一下同理心，不要只顧自己</li>
                    </ul>

                    <div style="margin-top: 30px; padding: 25px; background: linear-gradient(135deg, #48bb78, #38a169); color: white; border-radius: 15px; text-align: center;">
                        <h3 style="color: white; margin-bottom: 10px;">🎯 大二獨立生活計劃</h3>
                        <p style="font-size: 1.1rem; line-height: 1.8;">
                            靠打工收入自己付房租<br>
                            從基隆搬到台北，開始獨立生活<br>
                            把通勤時間省下來做更有意義的事
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 校園生活 -->
        <div id="life" class="content-section">
            <div class="cards-container">
                <div class="card">
                    <div class="card-icon">🏫</div>
                    <h2>校園生活 Campus Life</h2>

                    <h3>☯️ 生活哲學 Life Philosophy</h3>
                    <div style="padding: 25px; background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1)); border-radius: 15px; margin: 20px 0;">
                        <p style="font-size: 1.2rem; text-align: center; color: var(--primary); font-weight: 600; line-height: 1.8;">
                            希望大學生活很 chill，但實際上超忙<br>
                            不過忙得充實也不錯啦，重點是要找到平衡點
                        </p>
                    </div>

                    <ul>
                        <li><strong>理想：</strong>悠閒自在的大學生活</li>
                        <li><strong>現實：</strong>充實到有點忙碌</li>
                        <li><strong>心態：</strong>既然都忙了，不如享受這種充實感</li>
                        <li><strong>目標：</strong>繼續練習時間管理，找到最舒服的節奏</li>
                    </ul>

                    <h3>⚡ 核心能力 Core Competency</h3>
                    <ul>
                        <li><strong>時間管理：</strong>要顧學業、社團、打工、還要有社交生活</li>
                        <li><strong>優先順序：</strong>知道什麼事情比較重要</li>
                        <li><strong>效率提升：</strong>減少通勤浪費，多做點有用的事</li>
                        <li><strong>彈性調整：</strong>計劃趕不上變化，要隨機應變</li>
                    </ul>

                    <div class="quote">
                        「時間管理不是把每分鐘都塞滿，而是知道什麼時候該做什麼事，什麼時候該休息」
                    </div>

                    <h3>💪 身心健康 Health & Wellness</h3>
                    <ul>
                        <li>盡量規律作息，不要日夜顛倒</li>
                        <li>有空運動一下，保持體力</li>
                        <li>不要累積太多壓力，學會放鬆</li>
                        <li>玩玩吉他之類的，轉換心情</li>
                    </ul>

                    <div style="margin-top: 30px;">
                        <h3 style="color: var(--primary); margin-bottom: 20px;">📊 生活平衡儀表板</h3>
                        <div style="margin: 15px 0;">
                            <p>學業投入 (40%)</p>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 40%"></div>
                            </div>
                        </div>
                        <div style="margin: 15px 0;">
                            <p>社團活動 (20%)</p>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 20%"></div>
                            </div>
                        </div>
                        <div style="margin: 15px 0;">
                            <p>工讀實習 (15%)</p>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 15%"></div>
                            </div>
                        </div>
                        <div style="margin: 15px 0;">
                            <p>社交休閒 (15%)</p>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 15%"></div>
                            </div>
                        </div>
                        <div style="margin: 15px 0;">
                            <p>個人成長 (10%)</p>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 10%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 感情生活 -->
        <div id="relationships" class="content-section">
            <div class="cards-container">
                <div class="card">
                    <div class="card-icon">❤️</div>
                    <h2>感情生活 Relationships</h2>

                    <h3>👨‍👩‍👦 親情 Family</h3>
                    <ul>
                        <li><strong>理想：</strong>跟爸媽像朋友一樣聊天</li>
                        <li><strong>現況：</strong>比以前好多了，至少他們開始尊重我的想法</li>
                        <li><strong>方向：</strong>繼續朝著更成熟的親子關係努力</li>
                        <li>靠自己賺錢住外面後，關係可能會更健康</li>
                        <li>在獨立跟孝順之間找個平衡</li>
                    </ul>

                    <h3>👥 友情 Friendship</h3>
                    <ul>
                        <li>珍惜高中那些好朋友</li>
                        <li><strong>希望：</strong>這些友情能延續到出社會之後</li>
                        <li>在大學也要多交新朋友</li>
                        <li>定期聯絡，不要因為忙就疏遠了</li>
                        <li>真正的朋友是一輩子的事</li>
                    </ul>

                    <div class="quote">
                        「真的好朋友不會因為畢業就沒聯絡，而是會一直陪你走下去」
                    </div>

                    <h3>💑 愛情 Romance</h3>
                    <ul>
                        <li><strong>現況：</strong>有個穩定交往的女朋友</li>
                        <li><strong>目標：</strong>一起變更好，互相支持</li>
                        <li>學習怎麼經營一段成熟的感情</li>
                        <li>在追求自己目標的同時，也要顧好感情</li>
                        <li>練習溝通、包容、一起成長</li>
                    </ul>

                    <div style="margin-top: 30px; padding: 25px; background: linear-gradient(135deg, rgba(240, 147, 251, 0.2), rgba(118, 75, 162, 0.2)); border-radius: 15px; text-align: center;">
                        <h3 style="color: var(--secondary); margin-bottom: 15px;">💝 關係經營的重點</h3>
                        <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 20px; margin-top: 20px;">
                            <div style="flex: 1; min-width: 150px;">
                                <div style="font-size: 2rem;">🤝</div>
                                <p style="font-weight: 600; margin-top: 10px;">尊重</p>
                            </div>
                            <div style="flex: 1; min-width: 150px;">
                                <div style="font-size: 2rem;">💬</div>
                                <p style="font-weight: 600; margin-top: 10px;">溝通</p>
                            </div>
                            <div style="flex: 1; min-width: 150px;">
                                <div style="font-size: 2rem;">🌱</div>
                                <p style="font-weight: 600; margin-top: 10px;">成長</p>
                            </div>
                            <div style="flex: 1; min-width: 150px;">
                                <div style="font-size: 2rem;">🤗</div>
                                <p style="font-weight: 600; margin-top: 10px;">支持</p>
                            </div>
                        </div>
                    </div>

                    <div style="margin-top: 30px; padding: 20px; border-left: 5px solid var(--accent); background: rgba(240, 147, 251, 0.05); border-radius: 0 10px 10px 0;">
                        <p style="font-size: 1.1rem; line-height: 1.8; color: var(--dark);">
                            <strong>為什麼感情生活很重要？</strong><br>
                            大學階段不只是學專業，更要學怎麼跟人相處、怎麼愛人、怎麼在自己的目標跟關係之間取得平衡。這些可能比微積分還重要。
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 人生方向 -->
        <div id="direction" class="content-section">
            <div class="cards-container">
                <div class="card">
                    <div class="card-icon">🚀</div>
                    <h2>人生方向 Life Direction</h2>

                    <h3>🎭 個人特質塑造 Character Building</h3>
                    <div style="padding: 25px; background: linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15)); border-radius: 15px; margin: 20px 0;">
                        <p style="font-size: 1.2rem; text-align: center; font-weight: 600; color: var(--secondary); line-height: 1.8;">
                            希望自己變成一個<span style="color: var(--primary);">理性</span>、<span style="color: var(--primary);">邏輯清楚</span>、<span style="color: var(--primary);">實事求是</span>的人
                        </p>
                    </div>

                    <ul>
                        <li><strong>理性思考：</strong>用數據跟邏輯做決定，不要憑感覺</li>
                        <li><strong>邏輯清晰：</strong>系統化地分析問題，找最佳解</li>
                        <li><strong>實事求是：</strong>腳踏實地，不要想一步登天</li>
                        <li>培養工程師該有的思維跟態度</li>
                    </ul>

                    <h3>🎓 升學藍圖 Graduate School Blueprint</h3>
                    
                    <div style="margin: 30px 0;">
                        <div style="background: linear-gradient(135deg, #ffd700, #ffed4e); padding: 25px; border-radius: 15px; margin-bottom: 15px; text-align: center; color: #1a202c;">
                            <h4 style="font-size: 1.5rem; margin-bottom: 10px; color: #1a202c;">🏆 夢想（敢夢一下）</h4>
                            <p style="font-size: 1.3rem; font-weight: 700;">四大研究所</p>
                            <p style="margin-top: 10px;">台大 | 清大 | 陽明交大 | 成大</p>
                        </div>

                        <div style="background: linear-gradient(135deg, rgba(72, 187, 120, 0.2), rgba(56, 161, 105, 0.2)); padding: 25px; border-radius: 15px; text-align: center;">
                            <h4 style="font-size: 1.3rem; margin-bottom: 10px; color: var(--success);">✅ 務實目標（這比較實際）</h4>
                            <p style="font-size: 1.2rem; font-weight: 600;">台科大 | 中央大學</p>
                        </div>
                    </div>

                    <h3>🔬 想走的專業領域</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 20px 0;">
                        <div style="padding: 20px; background: rgba(102, 126, 234, 0.1); border-radius: 15px; border: 2px solid rgba(102, 126, 234, 0.3);">
                            <div style="font-size: 2.5rem; text-align: center;">💾</div>
                            <h4 style="text-align: center; color: var(--primary); margin: 15px 0;">IC 設計</h4>
                            <p style="text-align: center; font-size: 0.95rem;">積體電路設計<br>台灣半導體超強的</p>
                        </div>
                        <div style="padding: 20px; background: rgba(118, 75, 162, 0.1); border-radius: 15px; border: 2px solid rgba(118, 75, 162, 0.3);">
                            <div style="font-size: 2.5rem; text-align: center;">📡</div>
                            <h4 style="text-align: center; color: var(--secondary); margin: 15px 0;">通信</h4>
                            <p style="text-align: center; font-size: 0.95rem;">通訊系統與網路<br>5G/6G 技術</p>
                        </div>
                        <div style="padding: 20px; background: rgba(240, 147, 251, 0.1); border-radius: 15px; border: 2px solid rgba(240, 147, 251, 0.3);">
                            <div style="font-size: 2.5rem; text-align: center;">⚡</div>
                            <h4 style="text-align: center; color: var(--accent); margin: 15px 0;">電力電子</h4>
                            <p style="text-align: center; font-size: 0.95rem;">能源轉換技術<br>綠能也不錯</p>
                        </div>
                    </div>

                    <div class="quote">
                        「有夢想很好，但也要設實際目標。有方向才不會迷路，有目標才走得穩」
                    </div>

                    <h3>📈 升學準備計劃</h3>
                    <ul>
                        <li><strong>GPA：</strong>穩住 3.8 以上，推甄才有機會</li>
                        <li><strong>專業：</strong>把電機的東西學好，有機會做專題</li>
                        <li><strong>英文：</strong>多益金色證書要拿到</li>
                        <li><strong>履歷：</strong>靠社團、實習、志工來充實</li>
                        <li><strong>人脈：</strong>多跟學長姐聊，了解各校狀況</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 結語 -->
        <div class="conclusion">
            <h2>🌟 大學對我來說的意義</h2>
            <p>
                對我來說，大學四年不只是拿一張文憑而已，更像是一個<span class="highlight">「把想法變成現實」</span>的過程。
            </p>
            <p>
                我會在這裡，把「想賺大錢」這個很實際的目標，透過好好學習變成真正的<span class="highlight">「專業能力」</span>；
                把「想交朋友」這件單純的事，透過社團跟團隊合作變成有價值的<span class="highlight">「人脈資源」</span>。
            </p>
            <p>
                從一個每天從基隆通勤的大一新生，變成一個<span class="highlight">經濟獨立、會獨立思考、能為自己負責</span>的準社會人士。
            </p>
            <p style="font-size: 1.4rem; margin-top: 30px; font-weight: 700; color: var(--secondary);">
                這四年，就是為了讓未來的自己變得更好。
            </p>

            <div style="display: flex; justify-content: center; gap: 30px; margin-top: 40px; flex-wrap: wrap;">
                <span class="tag" style="font-size: 1.1rem; padding: 10px 25px;">🎯 目標明確</span>
                <span class="tag" style="font-size: 1.1rem; padding: 10px 25px;">💪 腳踏實地</span>
                <span class="tag" style="font-size: 1.1rem; padding: 10px 25px;">🚀 持續進步</span>
                <span class="tag" style="font-size: 1.1rem; padding: 10px 25px;">⭐ 做最好的自己</span>
            </div>
        </div>

        <footer>
            <p>林承諺 | 國立台北科技大學 電機一甲 | 2025</p>
            <p style="margin-top: 10px;">「今天的努力，是為了明天更好的自己」</p>
        </footer>
    </div>

    <script>
        // 創建粒子背景
        function createParticles() {
            const container = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                const size = Math.random() * 5 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particle.style.animationDelay = Math.random() * 5 + 's';
                
                container.appendChild(particle);
            }
        }

        // 切換內容區
        function showSection(sectionId, eventTarget) {
            // 隱藏所有內容區
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });

            // 移除所有按鈕的 active 狀態
            document.querySelectorAll('.tab-button').forEach(button => {
                button.classList.remove('active');
            });

            // 顯示選中的內容區
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // 添加對應按鈕的 active 狀態
            if (eventTarget) {
                eventTarget.classList.add('active');
            } else {
                // 如果沒有提供事件目標，找到對應的按鈕並激活
                const buttons = document.querySelectorAll('.tab-button');
                buttons.forEach(btn => {
                    if (btn.getAttribute('onclick').includes(sectionId)) {
                        btn.classList.add('active');
                    }
                });
            }

            // 滾動到頂部
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // 切換顯示模式
        function switchMode(mode) {
            const listMode = document.getElementById('list-mode');
            const mindmap = document.getElementById('mindmap');
            const contentSections = document.querySelectorAll('.content-section');
            const modeButtons = document.querySelectorAll('.mode-button');

            if (mode === 'list') {
                listMode.style.display = 'flex';
                mindmap.classList.remove('active');
                contentSections.forEach(section => {
                    section.style.display = 'block';
                });
                
                // 顯示總覽區
                contentSections.forEach(section => {
                    section.classList.remove('active');
                });
                document.getElementById('overview').classList.add('active');
                
                // 激活第一個標籤按鈕
                const firstButton = document.querySelectorAll('.tab-button')[0];
                document.querySelectorAll('.tab-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                firstButton.classList.add('active');
                
                modeButtons[0].classList.add('active');
                modeButtons[1].classList.remove('active');
            } else if (mode === 'mindmap') {
                listMode.style.display = 'none';
                contentSections.forEach(section => {
                    section.classList.remove('active');
                    section.style.display = 'none';
                });
                mindmap.classList.add('active');
                modeButtons[0].classList.remove('active');
                modeButtons[1].classList.add('active');
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // 顯示彩蛋
        function showEasterEgg() {
            document.getElementById('modal').classList.add('active');
        }

        // 關閉彈窗
        function closeModal() {
            document.getElementById('modal').classList.remove('active');
        }

        // 頁面載入時初始化
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            
            // 為卡片添加進入動畫
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.card').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });

            // 點擊背景關閉彈窗
            document.getElementById('modal').addEventListener('click', function(e) {
                if (e.target === this) {
                    closeModal();
                }
            });
        });
    </script>
</body>
</html>`;
}
