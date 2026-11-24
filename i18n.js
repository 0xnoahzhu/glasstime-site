// GlassTime site translations, in the app's 11 languages. English is the page's own text and the default; the
// other languages replace each [data-i18n] element's content. The choice is kept in localStorage and can be linked
// with ?lang=<code> (e.g. ?lang=ja). App menu and setting names match the app's own Localizable.xcstrings.
(function () {
  var KL = "<kbd>⌃</kbd><kbd>⌥</kbd><kbd>L</kbd>";
  var KW = "<kbd>⌃</kbd><kbd>⌥</kbd><kbd>W</kbd>";
  var OPT = "<kbd>⌥</kbd>";
  var ISSUES = '<a href="https://github.com/0xnoahzhu/glasstime-site/issues">github.com/0xnoahzhu/glasstime-site/issues</a>';
  function apple(text, url) {
    return '<a href="' + (url || "https://www.apple.com/legal/privacy/") + '">' + text + "</a>";
  }

  var LANGUAGES = [
    ["en", "English"],
    ["zh-Hans", "简体中文"],
    ["zh-Hant", "繁體中文"],
    ["ja", "日本語"],
    ["ko", "한국어"],
    ["fr", "Français"],
    ["de", "Deutsch"],
    ["es", "Español"],
    ["pt-BR", "Português (Brasil)"],
    ["it", "Italiano"],
    ["ru", "Русский"]
  ];

  var T = {
    "zh-Hans": {
      "tagline": "macOS 上的 Liquid Glass 世界时钟",
      "nav.support": "技术支持", "nav.privacy": "隐私政策", "nav.contact": "联系我们", "nav.language": "语言",
      "s.intro": "GlassTime 把你关心的每座城市的时间放进一块悬浮的玻璃小组件，可以贴在菜单栏下方，也可以放在桌面任何位置。需要 macOS 26 或更高版本。",
      "s.locked.h": "小组件锁定后点不动了",
      "s.locked.p": "锁定的小组件会让点击直接穿透到下面的 App。要重新操作，可以：",
      "s.locked.1": "按 " + KL + "。",
      "s.locked.2": "按住 " + OPT + " 临时操作。",
      "s.locked.3": "把指针停在小组件上约一秒，等「解锁」按钮出现。",
      "s.locked.4": "点菜单栏里的 GlassTime 图标，取消勾选「锁定位置」。",
      "s.hidden.h": "小组件不见了",
      "s.hidden.p": "它可能被隐藏了。定时隐藏（1 小时或 4 小时）到时会自动恢复。想立即显示，可以按 " + KW + "，或在菜单栏图标里选择「显示小组件」，或再次打开 GlassTime。",
      "s.preview.h": "查看各地稍后的时间",
      "s.preview.p": "在小组件上滚动，每格 15 分钟；或在「24h 刻度带」样式中拖动时间轴。在「设置 › 操作」中可以设置按住某个修饰键时才滚动。",
      "s.keys.h": "修改快捷键",
      "s.keys.p": "打开「设置 › 操作」，重新录制锁定和显示/隐藏小组件的快捷键。",
      "s.login.h": "登录时自动启动",
      "s.login.p": "在「设置 › 通用」中打开「登录时启动」。如果 macOS 提示，请在「系统设置 › 通用 › 登录项与扩展」中允许 GlassTime。",
      "s.help.h": "仍需帮助？",
      "s.help.p": "请在 " + ISSUES + " 提交 Issue，写明遇到的问题、macOS 版本和 GlassTime 版本（打开「设置」后，在菜单栏选择 GlassTime › 关于 GlassTime）。",
      "p.updated": "最后更新：2026 年 11 月 24 日",
      "p.intro": "GlassTime 是一款 macOS 世界时钟。它完全在你的 Mac 上运行，不收集任何关于你的信息。",
      "p.nodata.h": "不收集任何数据",
      "p.nodata.1": "GlassTime 不收集、存储、传输或出售任何个人信息。",
      "p.nodata.2": "没有账号、没有统计分析、没有广告，也没有任何第三方 SDK。",
      "p.nodata.3": "GlassTime 不会跨 App 或网站追踪你。",
      "p.nodata.4": "GlassTime 不进行任何网络连接。",
      "p.local.h": "保存在你 Mac 上的内容",
      "p.local.p": "你的设置——添加的城市、各城市的工作时间、小组件样式以及其他偏好——只保存在你的 Mac 上，位于 GlassTime 自己的沙盒存储中，不会发送到任何地方。删除 App 即会一并删除。",
      "p.perm.h": "权限",
      "p.perm.p": "GlassTime 不会请求访问你的位置、通讯录、文件、相机、麦克风或辅助功能。快捷键和登录时启动使用的是无需额外授权的 macOS 标准功能。",
      "p.crash.h": "崩溃报告",
      "p.crash.p": "如果你在「系统设置 › 隐私与安全性 › 分析与改进」中选择与 App 开发者共享崩溃数据，Apple 可能会把 GlassTime 的匿名崩溃报告提供给开发者。是否共享由你决定，并由 Apple 依照" + apple("Apple 隐私政策", "https://www.apple.com.cn/legal/privacy/") + "处理。这些报告仅用于修复问题。",
      "p.kids.h": "儿童",
      "p.kids.p": "GlassTime 不收集任何人的数据，包括儿童。",
      "p.changes.h": "政策变更",
      "p.changes.p": "如本政策有变更，新版本会发布在本页面，并更新「最后更新」日期。",
      "p.contact.h": "联系方式",
      "p.contact.p": "有隐私方面的问题，请在 " + ISSUES + " 提交 Issue。"
    },

    "zh-Hant": {
      "tagline": "macOS 上的 Liquid Glass 世界時鐘",
      "nav.support": "技術支援", "nav.privacy": "隱私權政策", "nav.contact": "聯絡我們", "nav.language": "語言",
      "s.intro": "GlassTime 把你在意的每座城市時間，放進一塊漂浮的玻璃小工具，可以貼在選單列下方，也可以放在桌面任何位置。需要 macOS 26 或以上版本。",
      "s.locked.h": "小工具鎖定後點不到了",
      "s.locked.p": "鎖定的小工具會讓點按直接穿透到下方的 App。要重新操作，可以：",
      "s.locked.1": "按下 " + KL + "。",
      "s.locked.2": "按住 " + OPT + " 暫時操作。",
      "s.locked.3": "將指標停在小工具上約一秒，等「解鎖」按鈕出現。",
      "s.locked.4": "按一下選單列中的 GlassTime 圖像，取消勾選「鎖定位置」。",
      "s.hidden.h": "小工具不見了",
      "s.hidden.p": "它可能被隱藏了。定時隱藏（1 小時或 4 小時）到時會自動恢復。若要立即顯示，可以按下 " + KW + "，或在選單列圖像中選擇「顯示小工具」，或再次打開 GlassTime。",
      "s.preview.h": "查看各地稍後的時間",
      "s.preview.p": "在小工具上捲動，每格 15 分鐘；或在「24h 刻度帶」樣式中拖移時間軸。在「設定 › 操作」中可以設定按住修飾鍵時才捲動。",
      "s.keys.h": "修改快速鍵",
      "s.keys.p": "打開「設定 › 操作」，重新錄製鎖定及顯示/隱藏小工具的快速鍵。",
      "s.login.h": "登入時自動啟動",
      "s.login.p": "在「設定 › 一般」中開啟「登入時啟動」。如果 macOS 提示，請在「系統設定 › 一般 › 登入項目與延伸功能」中允許 GlassTime。",
      "s.help.h": "仍需要協助？",
      "s.help.p": "請到 " + ISSUES + " 提交 Issue，寫明遇到的問題、macOS 版本和 GlassTime 版本（打開「設定」後，在選單列選擇 GlassTime › 關於 GlassTime）。",
      "p.updated": "最後更新：2026 年 11 月 24 日",
      "p.intro": "GlassTime 是一款 macOS 世界時鐘。它完全在你的 Mac 上執行，不會收集任何關於你的資訊。",
      "p.nodata.h": "不收集任何資料",
      "p.nodata.1": "GlassTime 不會收集、儲存、傳輸或出售任何個人資訊。",
      "p.nodata.2": "沒有帳號、沒有統計分析、沒有廣告，也沒有任何第三方 SDK。",
      "p.nodata.3": "GlassTime 不會跨 App 或網站追蹤你。",
      "p.nodata.4": "GlassTime 不會進行任何網路連線。",
      "p.local.h": "儲存在你 Mac 上的內容",
      "p.local.p": "你的設定——加入的城市、各城市的工作時間、小工具樣式及其他偏好設定——只會儲存在你的 Mac 上，位於 GlassTime 自己的沙盒儲存空間中，不會傳送到任何地方。刪除 App 時會一併刪除。",
      "p.perm.h": "權限",
      "p.perm.p": "GlassTime 不會要求取用你的位置、聯絡人、檔案、相機、麥克風或輔助使用功能。快速鍵和登入時啟動使用的是不需要額外授權的 macOS 標準功能。",
      "p.crash.h": "當機報告",
      "p.crash.p": "如果你在「系統設定 › 隱私權與安全性 › 分析與改進功能」中選擇與 App 開發者分享當機資料，Apple 可能會將 GlassTime 的匿名當機報告提供給開發者。是否分享由你決定，並由 Apple 依照" + apple("Apple 隱私權政策") + "處理。這些報告僅用於修正問題。",
      "p.kids.h": "兒童",
      "p.kids.p": "GlassTime 不會收集任何人的資料，包括兒童。",
      "p.changes.h": "政策變更",
      "p.changes.p": "若本政策有所變更，新版本會發布在本頁面，並更新「最後更新」日期。",
      "p.contact.h": "聯絡方式",
      "p.contact.p": "有隱私權方面的問題，請到 " + ISSUES + " 提交 Issue。"
    },

    "ja": {
      "tagline": "macOS 用 Liquid Glass ワールドクロック",
      "nav.support": "サポート", "nav.privacy": "プライバシーポリシー", "nav.contact": "お問い合わせ", "nav.language": "言語",
      "s.intro": "GlassTime は、気になる都市の時刻をフローティングするガラスのウィジェットにまとめて表示します。メニューバーの下にドッキングすることも、デスクトップの好きな場所に置くこともできます。macOS 26 以降が必要です。",
      "s.locked.h": "ウィジェットがロックされてクリックできない",
      "s.locked.p": "ロックされたウィジェットは、クリックをその下の App にそのまま通します。もう一度操作するには、次のいずれかを行います：",
      "s.locked.1": KL + " を押す。",
      "s.locked.2": OPT + " を押している間、一時的に操作する。",
      "s.locked.3": "ポインタをウィジェットの上に約 1 秒置き、「ロック解除」ボタンが表示されるのを待つ。",
      "s.locked.4": "メニューバーの GlassTime アイコンをクリックし、「位置をロック」のチェックを外す。",
      "s.hidden.h": "ウィジェットが消えた",
      "s.hidden.p": "非表示になっている可能性があります。時間指定の非表示（1 時間または 4 時間）は、時間が来ると自動的に解除されます。すぐに表示するには、" + KW + " を押すか、メニューバーアイコンから「ウィジェットを表示」を選ぶか、GlassTime をもう一度開きます。",
      "s.preview.h": "各地の少し先の時刻を確認する",
      "s.preview.p": "ウィジェットの上でスクロールすると、15 分ずつ時刻を進められます。「24時間リボン」スタイルではタイムラインをドラッグすることもできます。「設定 › 操作」で、修飾キーを押している間だけスクロールするよう設定できます。",
      "s.keys.h": "キーボードショートカットを変更する",
      "s.keys.p": "「設定 › 操作」を開き、ロックとウィジェットの表示/非表示のショートカットを記録し直します。",
      "s.login.h": "ログイン時に GlassTime を起動する",
      "s.login.p": "「設定 › 一般」で「ログイン時に起動」をオンにします。macOS から確認された場合は、「システム設定 › 一般 › ログイン項目と機能拡張」で GlassTime を許可してください。",
      "s.help.h": "さらにサポートが必要な場合",
      "s.help.p": ISSUES + " で Issue を作成し、発生している状況、macOS のバージョン、GlassTime のバージョン（「設定」を開いた状態で、メニューバーの GlassTime › GlassTime について）をお知らせください。",
      "p.updated": "最終更新日：2026年11月24日",
      "p.intro": "GlassTime は macOS 用のワールドクロックです。すべての処理はお使いの Mac 上で行われ、あなたに関する情報は一切収集しません。",
      "p.nodata.h": "データを収集しません",
      "p.nodata.1": "GlassTime は個人情報を収集、保存、送信、販売しません。",
      "p.nodata.2": "アカウント、解析、広告、サードパーティ SDK は一切ありません。",
      "p.nodata.3": "GlassTime は App や Web サイトをまたいであなたを追跡しません。",
      "p.nodata.4": "GlassTime はネットワーク接続を一切行いません。",
      "p.local.h": "Mac に保存されるもの",
      "p.local.p": "設定（追加した都市、各都市の勤務時間、ウィジェットのスタイル、その他の環境設定）は、お使いの Mac 上の GlassTime 専用のサンドボックス領域にのみ保存され、どこにも送信されません。App を削除すると設定も削除されます。",
      "p.perm.h": "アクセス権",
      "p.perm.p": "GlassTime は位置情報、連絡先、ファイル、カメラ、マイク、アクセシビリティへのアクセスを求めません。キーボードショートカットとログイン時の起動には、追加のアクセス許可が不要な macOS の標準機能を使用しています。",
      "p.crash.h": "クラッシュレポート",
      "p.crash.p": "「システム設定 › プライバシーとセキュリティ › 解析と改善」で App デベロッパとのクラッシュデータの共有を選択した場合、Apple が GlassTime の匿名のクラッシュレポートをデベロッパに提供することがあります。共有するかどうかはあなたが決めることができ、" + apple("Apple のプライバシーポリシー") + "に従って Apple が取り扱います。レポートは不具合の修正にのみ使用されます。",
      "p.kids.h": "お子様について",
      "p.kids.p": "GlassTime はお子様を含め、誰のデータも収集しません。",
      "p.changes.h": "ポリシーの変更",
      "p.changes.p": "本ポリシーを変更する場合は、新しい版をこのページに掲載し、「最終更新日」を更新します。",
      "p.contact.h": "お問い合わせ",
      "p.contact.p": "プライバシーに関するご質問は、" + ISSUES + " で Issue を作成してください。"
    },

    "ko": {
      "tagline": "macOS용 Liquid Glass 세계 시계",
      "nav.support": "지원", "nav.privacy": "개인정보 처리방침", "nav.contact": "문의하기", "nav.language": "언어",
      "s.intro": "GlassTime은 관심 있는 모든 도시의 시간을 떠 있는 유리 위젯에 담아 보여 줍니다. 메뉴 막대 바로 아래에 고정하거나 데스크탑 어디에나 둘 수 있습니다. macOS 26 이상이 필요합니다.",
      "s.locked.h": "위젯이 잠겨서 클릭이 되지 않음",
      "s.locked.p": "잠긴 위젯은 클릭을 그 아래에 있는 앱으로 그대로 통과시킵니다. 다시 사용하려면 다음 중 하나를 하십시오.",
      "s.locked.1": KL + "을 누릅니다.",
      "s.locked.2": OPT + " 키를 누르고 있는 동안 일시적으로 조작할 수 있습니다.",
      "s.locked.3": "포인터를 위젯 위에 약 1초간 올려 두면 '잠금 해제' 버튼이 나타납니다.",
      "s.locked.4": "메뉴 막대의 GlassTime 아이콘을 클릭하고 '위치 잠금'을 끕니다.",
      "s.hidden.h": "위젯이 사라짐",
      "s.hidden.p": "위젯이 가려져 있을 수 있습니다. 시간 지정 가리기(1시간 또는 4시간)는 시간이 지나면 자동으로 해제됩니다. 바로 표시하려면 " + KW + "를 누르거나, 메뉴 막대 아이콘에서 '위젯 보기'를 선택하거나, GlassTime을 다시 여십시오.",
      "s.preview.h": "다른 도시의 이후 시간 확인하기",
      "s.preview.p": "위젯 위에서 스크롤하면 15분 단위로 시간을 이동할 수 있고, '24시간 리본' 스타일에서는 타임라인을 드래그할 수도 있습니다. '설정 › 조작'에서 보조 키를 누르고 있을 때만 스크롤되도록 설정할 수 있습니다.",
      "s.keys.h": "키보드 단축키 변경하기",
      "s.keys.p": "'설정 › 조작'을 열고 잠금 및 위젯 보기/가리기 단축키를 새로 녹화하십시오.",
      "s.login.h": "로그인 시 GlassTime 실행하기",
      "s.login.p": "'설정 › 일반'에서 '로그인 시 실행'을 켭니다. macOS에서 확인을 요청하면 '시스템 설정 › 일반 › 로그인 항목 및 확장 프로그램'에서 GlassTime을 허용하십시오.",
      "s.help.h": "추가 도움이 필요하신가요?",
      "s.help.p": ISSUES + "에서 이슈를 등록하고 발생한 상황, macOS 버전, GlassTime 버전('설정'을 연 상태에서 메뉴 막대의 GlassTime › GlassTime에 관하여)을 알려 주십시오.",
      "p.updated": "최종 업데이트: 2026년 11월 24일",
      "p.intro": "GlassTime은 macOS용 세계 시계입니다. 모든 기능이 사용자의 Mac에서만 동작하며, 사용자에 관한 어떤 정보도 수집하지 않습니다.",
      "p.nodata.h": "데이터를 수집하지 않음",
      "p.nodata.1": "GlassTime은 개인 정보를 수집, 저장, 전송 또는 판매하지 않습니다.",
      "p.nodata.2": "계정, 분석, 광고, 서드파티 SDK가 없습니다.",
      "p.nodata.3": "GlassTime은 앱이나 웹 사이트에 걸쳐 사용자를 추적하지 않습니다.",
      "p.nodata.4": "GlassTime은 네트워크에 연결하지 않습니다.",
      "p.local.h": "Mac에 저장되는 정보",
      "p.local.p": "설정(추가한 도시, 각 도시의 근무 시간, 위젯 스타일 및 기타 환경설정)은 사용자의 Mac에 있는 GlassTime 전용 샌드박스 저장 공간에만 저장되며, 어디로도 전송되지 않습니다. 앱을 삭제하면 설정도 함께 삭제됩니다.",
      "p.perm.h": "권한",
      "p.perm.p": "GlassTime은 위치, 연락처, 파일, 카메라, 마이크 또는 손쉬운 사용 기능에 대한 접근을 요청하지 않습니다. 키보드 단축키와 로그인 시 실행은 추가 권한이 필요 없는 macOS 표준 기능을 사용합니다.",
      "p.crash.h": "충돌 보고서",
      "p.crash.p": "'시스템 설정 › 개인정보 보호 및 보안 › 분석 및 향상'에서 앱 개발자와 충돌 데이터를 공유하도록 선택한 경우, Apple이 GlassTime의 익명 충돌 보고서를 개발자에게 제공할 수 있습니다. 공유 여부는 사용자가 결정하며, Apple은 " + apple("Apple 개인정보 처리방침") + "에 따라 이를 처리합니다. 보고서는 버그 수정에만 사용됩니다.",
      "p.kids.h": "아동",
      "p.kids.p": "GlassTime은 아동을 포함한 누구의 데이터도 수집하지 않습니다.",
      "p.changes.h": "방침 변경",
      "p.changes.p": "이 방침이 변경되면 새로운 버전을 이 페이지에 게시하고 '최종 업데이트' 날짜를 갱신합니다.",
      "p.contact.h": "문의",
      "p.contact.p": "개인정보에 관한 문의는 " + ISSUES + "에서 이슈를 등록해 주십시오."
    },

    "fr": {
      "tagline": "Une horloge mondiale Liquid Glass pour macOS",
      "nav.support": "Assistance", "nav.privacy": "Politique de confidentialité", "nav.contact": "Contact", "nav.language": "Langue",
      "s.intro": "GlassTime affiche l’heure de toutes les villes qui comptent pour vous dans un widget de verre flottant, ancré sous la barre des menus ou posé n’importe où sur le bureau. macOS 26 ou version ultérieure requis.",
      "s.locked.h": "Le widget est verrouillé et ne réagit plus aux clics",
      "s.locked.p": "Un widget verrouillé laisse passer les clics vers l’app située en dessous. Pour l’utiliser à nouveau, au choix :",
      "s.locked.1": "Appuyez sur " + KL + ".",
      "s.locked.2": "Maintenez " + OPT + " enfoncée pour interagir temporairement.",
      "s.locked.3": "Laissez le pointeur sur le widget environ une seconde, jusqu’à l’apparition du bouton « Déverrouiller ».",
      "s.locked.4": "Cliquez sur l’icône GlassTime dans la barre des menus et décochez « Verrouiller la position ».",
      "s.hidden.h": "Le widget a disparu",
      "s.hidden.p": "Il est peut-être masqué. Un masquage temporaire (1 ou 4 heures) prend fin tout seul. Pour l’afficher tout de suite, appuyez sur " + KW + ", choisissez « Afficher le widget » dans l’icône de la barre des menus ou rouvrez GlassTime.",
      "s.preview.h": "Voir l’heure ailleurs plus tard dans la journée",
      "s.preview.p": "Faites défiler sur le widget pour avancer par pas de 15 minutes, ou faites glisser la frise du style « Ruban 24 h ». Dans Réglages › Commandes, vous pouvez exiger une touche de modification pour le défilement.",
      "s.keys.h": "Modifier les raccourcis clavier",
      "s.keys.p": "Ouvrez Réglages › Commandes et enregistrez de nouveaux raccourcis pour verrouiller le widget et pour l’afficher ou le masquer.",
      "s.login.h": "Ouvrir GlassTime à la connexion",
      "s.login.p": "Activez « Ouvrir à la connexion » dans Réglages › Général. Si macOS le demande, autorisez GlassTime dans Réglages Système › Général › Ouverture et extensions.",
      "s.help.h": "Besoin d’aide supplémentaire ?",
      "s.help.p": "Ouvrez un ticket sur " + ISSUES + " en décrivant ce que vous constatez, votre version de macOS et votre version de GlassTime (Réglages ouverts, choisissez GlassTime › À propos de GlassTime dans la barre des menus).",
      "p.updated": "Dernière mise à jour : 24 novembre 2026",
      "p.intro": "GlassTime est une horloge mondiale pour macOS. Elle fonctionne entièrement sur votre Mac et ne collecte aucune information vous concernant.",
      "p.nodata.h": "Aucune collecte de données",
      "p.nodata.1": "GlassTime ne collecte, ne stocke, ne transmet ni ne vend aucune information personnelle.",
      "p.nodata.2": "Pas de compte, pas d’outils d’analyse, pas de publicité et aucun SDK tiers.",
      "p.nodata.3": "GlassTime ne vous suit pas d’une app ou d’un site web à l’autre.",
      "p.nodata.4": "GlassTime n’établit aucune connexion réseau.",
      "p.local.h": "Ce qui reste sur votre Mac",
      "p.local.p": "Vos réglages — les villes ajoutées, leurs heures de travail, le style du widget et vos autres préférences — sont enregistrés uniquement sur votre Mac, dans l’espace de stockage isolé (sandbox) de GlassTime. Ils ne sont jamais envoyés ailleurs. Supprimer l’app les supprime.",
      "p.perm.h": "Autorisations",
      "p.perm.p": "GlassTime ne demande pas l’accès à votre position, à vos contacts, à vos fichiers, à la caméra, au micro ni aux fonctionnalités d’accessibilité. Les raccourcis clavier et l’ouverture à la connexion utilisent des fonctionnalités standard de macOS qui ne nécessitent aucune autorisation supplémentaire.",
      "p.crash.h": "Rapports de plantage",
      "p.crash.p": "Si vous choisissez de partager les données de plantage avec les développeurs d’apps dans Réglages Système › Confidentialité et sécurité › Analyse et améliorations, Apple peut fournir au développeur des rapports de plantage anonymes de GlassTime. Ce partage dépend de vous et est géré par Apple conformément à la " + apple("Politique de confidentialité d’Apple") + ". Les rapports servent uniquement à corriger des bugs.",
      "p.kids.h": "Enfants",
      "p.kids.p": "GlassTime ne collecte aucune donnée, y compris auprès des enfants.",
      "p.changes.h": "Modifications",
      "p.changes.p": "Si cette politique change, la nouvelle version sera publiée sur cette page avec une nouvelle date de « Dernière mise à jour ».",
      "p.contact.h": "Contact",
      "p.contact.p": "Une question sur la confidentialité ? Ouvrez un ticket sur " + ISSUES + "."
    },

    "de": {
      "tagline": "Eine Liquid-Glass-Weltuhr für macOS",
      "nav.support": "Support", "nav.privacy": "Datenschutzrichtlinie", "nav.contact": "Kontakt", "nav.language": "Sprache",
      "s.intro": "GlassTime zeigt die Uhrzeit aller Städte, die dir wichtig sind, in einem schwebenden Glas-Widget – angedockt unter der Menüleiste oder frei auf dem Schreibtisch. Erfordert macOS 26 oder neuer.",
      "s.locked.h": "Das Widget ist gesperrt und reagiert nicht auf Klicks",
      "s.locked.p": "Ein gesperrtes Widget lässt Klicks zur darunterliegenden App durch. Um es wieder zu bedienen, hast du folgende Möglichkeiten:",
      "s.locked.1": "Drücke " + KL + ".",
      "s.locked.2": "Halte " + OPT + " gedrückt, um es vorübergehend zu bedienen.",
      "s.locked.3": "Lass den Zeiger etwa eine Sekunde auf dem Widget ruhen, bis die Taste „Entsperren“ erscheint.",
      "s.locked.4": "Klicke auf das GlassTime-Symbol in der Menüleiste und deaktiviere „Position sperren“.",
      "s.hidden.h": "Das Widget ist verschwunden",
      "s.hidden.p": "Es ist vielleicht ausgeblendet. Ein zeitlich begrenztes Ausblenden (1 oder 4 Stunden) endet von selbst. Um es sofort einzublenden, drücke " + KW + ", wähle „Widget einblenden“ im Menüleistensymbol oder öffne GlassTime erneut.",
      "s.preview.h": "Die Uhrzeit anderswo zu einem späteren Zeitpunkt sehen",
      "s.preview.p": "Scrolle über dem Widget, um in 15-Minuten-Schritten durch den Tag zu gehen, oder ziehe an der Zeitleiste des Stils „24h-Skala“. Unter Einstellungen › Steuerung kannst du festlegen, dass zum Scrollen eine Sondertaste gedrückt sein muss.",
      "s.keys.h": "Tastaturkurzbefehle ändern",
      "s.keys.p": "Öffne Einstellungen › Steuerung und nimm neue Kurzbefehle zum Sperren sowie zum Ein- und Ausblenden des Widgets auf.",
      "s.login.h": "GlassTime beim Anmelden öffnen",
      "s.login.p": "Aktiviere „Beim Anmelden öffnen“ unter Einstellungen › Allgemein. Falls macOS nachfragt, erlaube GlassTime unter Systemeinstellungen › Allgemein › Anmeldeobjekte & Erweiterungen.",
      "s.help.h": "Brauchst du weitere Hilfe?",
      "s.help.p": "Erstelle ein Issue unter " + ISSUES + " und beschreibe, was du siehst, sowie deine macOS-Version und GlassTime-Version (bei geöffneten Einstellungen in der Menüleiste GlassTime › Über GlassTime wählen).",
      "p.updated": "Zuletzt aktualisiert: 24. November 2026",
      "p.intro": "GlassTime ist eine Weltuhr für macOS. Sie läuft vollständig auf deinem Mac und erfasst keinerlei Informationen über dich.",
      "p.nodata.h": "Keine Datenerfassung",
      "p.nodata.1": "GlassTime erfasst, speichert, überträgt oder verkauft keine personenbezogenen Daten.",
      "p.nodata.2": "Es gibt keine Accounts, keine Analysen, keine Werbung und keine SDKs von Drittanbietern.",
      "p.nodata.3": "GlassTime verfolgt dich nicht über Apps oder Websites hinweg.",
      "p.nodata.4": "GlassTime baut keine Netzwerkverbindungen auf.",
      "p.local.h": "Was auf deinem Mac bleibt",
      "p.local.p": "Deine Einstellungen – die hinzugefügten Städte, ihre Arbeitszeiten, der Widget-Stil und deine übrigen Präferenzen – werden ausschließlich auf deinem Mac im eigenen, abgeschotteten Speicherbereich (Sandbox) von GlassTime gesichert. Sie werden nirgendwohin gesendet. Beim Löschen der App werden sie entfernt.",
      "p.perm.h": "Berechtigungen",
      "p.perm.p": "GlassTime fragt nicht nach Zugriff auf deinen Standort, deine Kontakte, Dateien, Kamera, Mikrofon oder die Bedienungshilfen. Tastaturkurzbefehle und das Öffnen beim Anmelden nutzen Standardfunktionen von macOS, die keine zusätzliche Berechtigung erfordern.",
      "p.crash.h": "Absturzberichte",
      "p.crash.p": "Wenn du unter Systemeinstellungen › Datenschutz & Sicherheit › Analyse & Verbesserungen festlegst, Absturzdaten mit App-Entwicklern zu teilen, kann Apple dem Entwickler anonyme Absturzberichte zu GlassTime bereitstellen. Diese Freigabe steuerst du selbst; Apple verarbeitet die Daten gemäß der " + apple("Datenschutzrichtlinie von Apple") + ". Die Berichte werden ausschließlich zur Fehlerbehebung verwendet.",
      "p.kids.h": "Kinder",
      "p.kids.p": "GlassTime erfasst von niemandem Daten, auch nicht von Kindern.",
      "p.changes.h": "Änderungen",
      "p.changes.p": "Wenn sich diese Richtlinie ändert, wird die neue Fassung auf dieser Seite mit einem neuen Datum unter „Zuletzt aktualisiert“ veröffentlicht.",
      "p.contact.h": "Kontakt",
      "p.contact.p": "Fragen zum Datenschutz? Erstelle ein Issue unter " + ISSUES + "."
    },

    "es": {
      "tagline": "Un reloj mundial Liquid Glass para macOS",
      "nav.support": "Soporte", "nav.privacy": "Política de privacidad", "nav.contact": "Contacto", "nav.language": "Idioma",
      "s.intro": "GlassTime muestra la hora de todas las ciudades que te importan en un widget de cristal flotante, acoplado bajo la barra de menús o en cualquier lugar del escritorio. Requiere macOS 26 o posterior.",
      "s.locked.h": "El widget está bloqueado y no responde a los clics",
      "s.locked.p": "Un widget bloqueado deja pasar los clics a la app que tiene debajo. Para volver a usarlo, haz cualquiera de estas cosas:",
      "s.locked.1": "Pulsa " + KL + ".",
      "s.locked.2": "Mantén pulsada " + OPT + " para interactuar temporalmente.",
      "s.locked.3": "Deja el puntero sobre el widget un segundo hasta que aparezca el botón “Desbloquear”.",
      "s.locked.4": "Haz clic en el icono de GlassTime en la barra de menús y desactiva “Bloquear posición”.",
      "s.hidden.h": "El widget ha desaparecido",
      "s.hidden.p": "Puede que esté oculto. Una ocultación temporal (1 o 4 horas) termina sola. Para mostrarlo ahora, pulsa " + KW + ", elige “Mostrar widget” en el icono de la barra de menús o vuelve a abrir GlassTime.",
      "s.preview.h": "Ver la hora en otros lugares más tarde",
      "s.preview.p": "Desplázate sobre el widget para avanzar el día en pasos de 15 minutos, o arrastra la línea de tiempo del estilo “Cinta 24 h”. En Ajustes › Controles puedes exigir una tecla modificadora para desplazarte.",
      "s.keys.h": "Cambiar las funciones rápidas de teclado",
      "s.keys.p": "Abre Ajustes › Controles y graba nuevas funciones rápidas para bloquear el widget y para mostrarlo u ocultarlo.",
      "s.login.h": "Abrir GlassTime al iniciar sesión",
      "s.login.p": "Activa “Abrir al iniciar sesión” en Ajustes › General. Si macOS lo pide, permite GlassTime en Ajustes del Sistema › General › Ítems de inicio y extensiones.",
      "s.help.h": "¿Necesitas más ayuda?",
      "s.help.p": "Abre un issue en " + ISSUES + " y describe lo que ocurre, tu versión de macOS y tu versión de GlassTime (con Ajustes abierto, elige GlassTime › Acerca de GlassTime en la barra de menús).",
      "p.updated": "Última actualización: 24 de noviembre de 2026",
      "p.intro": "GlassTime es un reloj mundial para macOS. Funciona por completo en tu Mac y no recopila ninguna información sobre ti.",
      "p.nodata.h": "Sin recopilación de datos",
      "p.nodata.1": "GlassTime no recopila, almacena, transmite ni vende información personal.",
      "p.nodata.2": "No hay cuentas, análisis, publicidad ni SDK de terceros.",
      "p.nodata.3": "GlassTime no te rastrea entre apps ni sitios web.",
      "p.nodata.4": "GlassTime no establece ninguna conexión de red.",
      "p.local.h": "Lo que se queda en tu Mac",
      "p.local.p": "Tus ajustes —las ciudades que añades, sus horarios laborales, el estilo del widget y el resto de preferencias— se guardan solo en tu Mac, dentro del almacenamiento aislado (sandbox) de GlassTime. Nunca se envían a ningún sitio. Al eliminar la app se eliminan también.",
      "p.perm.h": "Permisos",
      "p.perm.p": "GlassTime no solicita acceso a tu ubicación, contactos, archivos, cámara, micrófono ni a las funciones de accesibilidad. Las funciones rápidas de teclado y la apertura al iniciar sesión usan funciones estándar de macOS que no necesitan permisos adicionales.",
      "p.crash.h": "Informes de fallos",
      "p.crash.p": "Si decides compartir datos de fallos con los desarrolladores de apps en Ajustes del Sistema › Privacidad y seguridad › Análisis y mejoras, Apple puede proporcionar al desarrollador informes de fallos anónimos de GlassTime. Tú controlas ese envío, y Apple lo gestiona según la " + apple("Política de privacidad de Apple") + ". Los informes solo se usan para corregir errores.",
      "p.kids.h": "Menores",
      "p.kids.p": "GlassTime no recopila datos de nadie, incluidos los menores.",
      "p.changes.h": "Cambios",
      "p.changes.p": "Si esta política cambia, la nueva versión se publicará en esta página con una nueva fecha de “Última actualización”.",
      "p.contact.h": "Contacto",
      "p.contact.p": "¿Tienes preguntas sobre privacidad? Abre un issue en " + ISSUES + "."
    },

    "pt-BR": {
      "tagline": "Um relógio mundial Liquid Glass para macOS",
      "nav.support": "Suporte", "nav.privacy": "Política de Privacidade", "nav.contact": "Contato", "nav.language": "Idioma",
      "s.intro": "O GlassTime mostra a hora de todas as cidades importantes para você em um widget de vidro flutuante, que pode ficar fixado abaixo da barra de menus ou em qualquer lugar da mesa. Requer macOS 26 ou posterior.",
      "s.locked.h": "O widget está bloqueado e não responde a cliques",
      "s.locked.p": "Um widget bloqueado deixa os cliques passarem para o app que está embaixo. Para usá-lo de novo, faça uma destas opções:",
      "s.locked.1": "Pressione " + KL + ".",
      "s.locked.2": "Mantenha " + OPT + " pressionada para interagir temporariamente.",
      "s.locked.3": "Deixe o ponteiro sobre o widget por cerca de um segundo até aparecer o botão “Desbloquear”.",
      "s.locked.4": "Clique no ícone do GlassTime na barra de menus e desmarque “Bloquear posição”.",
      "s.hidden.h": "O widget sumiu",
      "s.hidden.p": "Ele pode estar oculto. Uma ocultação temporária (1 ou 4 horas) termina sozinha. Para mostrá-lo agora, pressione " + KW + ", escolha “Mostrar widget” no ícone da barra de menus ou abra o GlassTime novamente.",
      "s.preview.h": "Ver a hora em outros lugares mais tarde",
      "s.preview.p": "Role sobre o widget para avançar o dia em passos de 15 minutos ou arraste a linha do tempo do estilo “Régua 24 h”. Em Ajustes › Controles, você pode exigir uma tecla modificadora para rolar.",
      "s.keys.h": "Alterar os atalhos de teclado",
      "s.keys.p": "Abra Ajustes › Controles e grave novos atalhos para bloquear o widget e para mostrá-lo ou ocultá-lo.",
      "s.login.h": "Abrir o GlassTime ao iniciar sessão",
      "s.login.p": "Ative “Abrir ao iniciar sessão” em Ajustes › Geral. Se o macOS pedir, permita o GlassTime em Ajustes do Sistema › Geral › Itens de Início e Extensões.",
      "s.help.h": "Ainda precisa de ajuda?",
      "s.help.p": "Abra um issue em " + ISSUES + " e descreva o que está acontecendo, sua versão do macOS e sua versão do GlassTime (com Ajustes aberto, escolha GlassTime › Sobre o GlassTime na barra de menus).",
      "p.updated": "Última atualização: 24 de novembro de 2026",
      "p.intro": "O GlassTime é um relógio mundial para macOS. Ele funciona inteiramente no seu Mac e não coleta nenhuma informação sobre você.",
      "p.nodata.h": "Nenhuma coleta de dados",
      "p.nodata.1": "O GlassTime não coleta, armazena, transmite nem vende nenhuma informação pessoal.",
      "p.nodata.2": "Não há contas, análises, anúncios nem SDKs de terceiros.",
      "p.nodata.3": "O GlassTime não rastreia você entre apps ou sites.",
      "p.nodata.4": "O GlassTime não faz nenhuma conexão de rede.",
      "p.local.h": "O que fica no seu Mac",
      "p.local.p": "Seus ajustes — as cidades que você adiciona, os horários de trabalho, o estilo do widget e as demais preferências — são salvos apenas no seu Mac, no armazenamento isolado (sandbox) do próprio GlassTime. Eles nunca são enviados para lugar nenhum. Apagar o app também os apaga.",
      "p.perm.h": "Permissões",
      "p.perm.p": "O GlassTime não pede acesso à sua localização, contatos, arquivos, câmera, microfone ou recursos de acessibilidade. Os atalhos de teclado e a abertura ao iniciar sessão usam recursos padrão do macOS que não precisam de permissão extra.",
      "p.crash.h": "Relatórios de falhas",
      "p.crash.p": "Se você optar por compartilhar dados de falhas com desenvolvedores de apps em Ajustes do Sistema › Privacidade e Segurança › Análise e Melhorias, a Apple poderá fornecer ao desenvolvedor relatórios de falhas anônimos do GlassTime. Esse compartilhamento é controlado por você e tratado pela Apple de acordo com a " + apple("Política de Privacidade da Apple") + ". Os relatórios são usados apenas para corrigir erros.",
      "p.kids.h": "Crianças",
      "p.kids.p": "O GlassTime não coleta dados de ninguém, inclusive de crianças.",
      "p.changes.h": "Alterações",
      "p.changes.p": "Se esta política mudar, a nova versão será publicada nesta página com uma nova data de “Última atualização”.",
      "p.contact.h": "Contato",
      "p.contact.p": "Dúvidas sobre privacidade? Abra um issue em " + ISSUES + "."
    },

    "it": {
      "tagline": "Un orologio mondiale Liquid Glass per macOS",
      "nav.support": "Supporto", "nav.privacy": "Informativa sulla privacy", "nav.contact": "Contatti", "nav.language": "Lingua",
      "s.intro": "GlassTime mostra l’ora di tutte le città che ti interessano in un widget di vetro fluttuante, agganciato sotto la barra dei menu o libero sulla scrivania. Richiede macOS 26 o versioni successive.",
      "s.locked.h": "Il widget è bloccato e non risponde ai clic",
      "s.locked.p": "Un widget bloccato lascia passare i clic all’app sottostante. Per usarlo di nuovo, puoi:",
      "s.locked.1": "Premere " + KL + ".",
      "s.locked.2": "Tenere premuto " + OPT + " per interagire temporaneamente.",
      "s.locked.3": "Lasciare il puntatore sul widget per circa un secondo, finché non compare il pulsante “Sblocca”.",
      "s.locked.4": "Fare clic sull’icona di GlassTime nella barra dei menu e disattivare “Blocca posizione”.",
      "s.hidden.h": "Il widget è scomparso",
      "s.hidden.p": "Potrebbe essere nascosto. Un occultamento temporaneo (1 o 4 ore) termina da solo. Per mostrarlo subito, premi " + KW + ", scegli “Mostra widget” dall’icona nella barra dei menu oppure apri di nuovo GlassTime.",
      "s.preview.h": "Vedere l’ora altrove più tardi",
      "s.preview.p": "Scorri sul widget per spostarti nella giornata a passi di 15 minuti, oppure trascina la linea temporale dello stile “Nastro 24 ore”. In Impostazioni › Controlli puoi richiedere un tasto modificatore per lo scorrimento.",
      "s.keys.h": "Modificare le abbreviazioni da tastiera",
      "s.keys.p": "Apri Impostazioni › Controlli e registra nuove abbreviazioni per bloccare il widget e per mostrarlo o nasconderlo.",
      "s.login.h": "Aprire GlassTime al login",
      "s.login.p": "Attiva “Apri al login” in Impostazioni › Generali. Se macOS lo chiede, consenti GlassTime in Impostazioni di Sistema › Generali › Elementi login ed estensioni.",
      "s.help.h": "Serve altro aiuto?",
      "s.help.p": "Apri una segnalazione su " + ISSUES + " descrivendo il problema, la versione di macOS e la versione di GlassTime (con Impostazioni aperte, scegli GlassTime › Informazioni su GlassTime nella barra dei menu).",
      "p.updated": "Ultimo aggiornamento: 24 novembre 2026",
      "p.intro": "GlassTime è un orologio mondiale per macOS. Funziona interamente sul tuo Mac e non raccoglie alcuna informazione su di te.",
      "p.nodata.h": "Nessuna raccolta di dati",
      "p.nodata.1": "GlassTime non raccoglie, conserva, trasmette né vende alcuna informazione personale.",
      "p.nodata.2": "Nessun account, nessuna analisi, nessuna pubblicità e nessun SDK di terze parti.",
      "p.nodata.3": "GlassTime non ti traccia tra app o siti web.",
      "p.nodata.4": "GlassTime non effettua alcuna connessione di rete.",
      "p.local.h": "Cosa resta sul tuo Mac",
      "p.local.p": "Le tue impostazioni (le città aggiunte, i loro orari di lavoro, lo stile del widget e le altre preferenze) vengono salvate solo sul tuo Mac, nello spazio di archiviazione isolato (sandbox) di GlassTime. Non vengono mai inviate altrove. Eliminando l’app vengono eliminate anche loro.",
      "p.perm.h": "Autorizzazioni",
      "p.perm.p": "GlassTime non chiede l’accesso a posizione, contatti, file, fotocamera, microfono o funzioni di accessibilità. Le abbreviazioni da tastiera e l’apertura al login usano funzioni standard di macOS che non richiedono autorizzazioni aggiuntive.",
      "p.crash.h": "Report sugli arresti anomali",
      "p.crash.p": "Se scegli di condividere i dati sugli arresti anomali con gli sviluppatori di app in Impostazioni di Sistema › Privacy e sicurezza › Analisi e miglioramenti, Apple può fornire allo sviluppatore report anonimi sugli arresti anomali di GlassTime. Questa condivisione è sotto il tuo controllo ed è gestita da Apple secondo l’" + apple("Informativa sulla privacy di Apple") + ". I report vengono usati solo per correggere errori.",
      "p.kids.h": "Minori",
      "p.kids.p": "GlassTime non raccoglie dati di nessuno, minori compresi.",
      "p.changes.h": "Modifiche",
      "p.changes.p": "Se questa informativa cambia, la nuova versione verrà pubblicata in questa pagina con una nuova data di “Ultimo aggiornamento”.",
      "p.contact.h": "Contatti",
      "p.contact.p": "Domande sulla privacy? Apri una segnalazione su " + ISSUES + "."
    },

    "ru": {
      "tagline": "Мировые часы в стиле Liquid Glass для macOS",
      "nav.support": "Поддержка", "nav.privacy": "Политика конфиденциальности", "nav.contact": "Связаться", "nav.language": "Язык",
      "s.intro": "GlassTime показывает время во всех важных для вас городах в парящем стеклянном виджете — под строкой меню или в любом месте рабочего стола. Требуется macOS 26 или новее.",
      "s.locked.h": "Виджет закреплён и не реагирует на нажатия",
      "s.locked.p": "Закреплённый виджет пропускает нажатия к приложению под ним. Чтобы снова им управлять, сделайте одно из следующего:",
      "s.locked.1": "Нажмите " + KL + ".",
      "s.locked.2": "Удерживайте " + OPT + ", чтобы временно управлять виджетом.",
      "s.locked.3": "Задержите указатель на виджете примерно на секунду, пока не появится кнопка «Разблокировать».",
      "s.locked.4": "Нажмите значок GlassTime в строке меню и снимите флажок «Закрепить положение».",
      "s.hidden.h": "Виджет пропал",
      "s.hidden.p": "Возможно, он скрыт. Временное скрытие (на 1 или 4 часа) закончится само. Чтобы показать виджет сразу, нажмите " + KW + ", выберите «Показать виджет» в меню значка в строке меню или снова откройте GlassTime.",
      "s.preview.h": "Посмотреть время в других городах на потом",
      "s.preview.p": "Прокручивайте над виджетом, чтобы смещать время с шагом 15 минут, или перетаскивайте шкалу в стиле «Шкала 24 ч». В разделе «Настройки › Управление» можно включить прокрутку только с зажатой клавишей-модификатором.",
      "s.keys.h": "Изменить сочетания клавиш",
      "s.keys.p": "Откройте «Настройки › Управление» и запишите новые сочетания для закрепления виджета, а также для его показа и скрытия.",
      "s.login.h": "Запуск GlassTime при входе",
      "s.login.p": "Включите «Открывать при входе» в разделе «Настройки › Основные». Если macOS попросит, разрешите GlassTime в «Системные настройки › Основные › Объекты входа и расширения».",
      "s.help.h": "Нужна помощь?",
      "s.help.p": "Создайте issue на " + ISSUES + " и опишите проблему, версию macOS и версию GlassTime (при открытых настройках выберите в строке меню GlassTime › О программе GlassTime).",
      "p.updated": "Последнее обновление: 24 ноября 2026 г.",
      "p.intro": "GlassTime — это мировые часы для macOS. Приложение работает полностью на вашем Mac и не собирает никакой информации о вас.",
      "p.nodata.h": "Никакого сбора данных",
      "p.nodata.1": "GlassTime не собирает, не хранит, не передаёт и не продаёт персональные данные.",
      "p.nodata.2": "Нет учётных записей, аналитики, рекламы и сторонних SDK.",
      "p.nodata.3": "GlassTime не отслеживает вас в других приложениях и на веб-сайтах.",
      "p.nodata.4": "GlassTime не устанавливает никаких сетевых подключений.",
      "p.local.h": "Что хранится на вашем Mac",
      "p.local.p": "Ваши настройки — добавленные города, их рабочие часы, стиль виджета и другие параметры — хранятся только на вашем Mac, в собственном изолированном хранилище (песочнице) GlassTime. Они никуда не отправляются. При удалении приложения они удаляются.",
      "p.perm.h": "Разрешения",
      "p.perm.p": "GlassTime не запрашивает доступ к геопозиции, контактам, файлам, камере, микрофону или функциям универсального доступа. Сочетания клавиш и запуск при входе используют стандартные возможности macOS, которым не нужны дополнительные разрешения.",
      "p.crash.h": "Отчёты о сбоях",
      "p.crash.p": "Если в разделе «Системные настройки › Конфиденциальность и безопасность › Аналитика и улучшения» вы разрешили делиться данными о сбоях с разработчиками приложений, Apple может передавать разработчику анонимные отчёты о сбоях GlassTime. Вы сами управляете этой передачей, а Apple обрабатывает данные в соответствии с " + apple("Политикой конфиденциальности Apple") + ". Отчёты используются только для исправления ошибок.",
      "p.kids.h": "Дети",
      "p.kids.p": "GlassTime ни у кого не собирает данные, в том числе у детей.",
      "p.changes.h": "Изменения",
      "p.changes.p": "Если эта политика изменится, новая версия будет опубликована на этой странице с новой датой «Последнее обновление».",
      "p.contact.h": "Контакты",
      "p.contact.p": "Вопросы о конфиденциальности? Создайте issue на " + ISSUES + "."
    }
  };

  var supported = LANGUAGES.map(function (l) { return l[0]; });
  var root = document.documentElement;

  function pick() {
    var query = new URLSearchParams(location.search).get("lang");
    if (supported.indexOf(query) >= 0) return query;
    try {
      var saved = localStorage.getItem("lang");
      if (supported.indexOf(saved) >= 0) return saved;
    } catch (e) {}
    return "en";
  }

  function apply(lang) {
    var strings = T[lang] || {};
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node.getAttribute("data-en") === null) node.setAttribute("data-en", node.innerHTML);
      var text = strings[node.getAttribute("data-i18n")];
      node.innerHTML = text !== undefined ? text : node.getAttribute("data-en");
    }
    root.lang = lang;
    var page = document.body.getAttribute("data-page") === "privacy" ? "nav.privacy" : "nav.support";
    var pageName = strings[page] || (page === "nav.privacy" ? "Privacy Policy" : "Support");
    document.title = "GlassTime — " + pageName;
    var menu = document.getElementById("lang");
    if (menu) menu.value = lang;
    root.classList.remove("i18n-pending");
  }

  var initial = pick();
  if (initial !== "en") root.classList.add("i18n-pending");

  document.addEventListener("DOMContentLoaded", function () {
    var menu = document.getElementById("lang");
    if (menu) {
      LANGUAGES.forEach(function (l) {
        var option = document.createElement("option");
        option.value = l[0];
        option.textContent = l[1];
        option.lang = l[0];
        menu.appendChild(option);
      });
      menu.addEventListener("change", function () {
        try { localStorage.setItem("lang", menu.value); } catch (e) {}
        apply(menu.value);
      });
    }
    apply(initial);
  });
})();
