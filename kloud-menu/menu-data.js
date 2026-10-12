const menuData = {
  categories: [
    {
      id: "sunset_cheers",
      name: { ko: "선셋 치어스 아워+", en: "Sunset Cheers Hour+", ja: "サンセット・チアーズ・アワー+" },
      icon: "🌅",
      desc: { 
        ko: "18:00 - 20:00 한정 프리미엄 BBQ & 주류 무제한 페어링", 
        en: "18:00 - 20:00 Premium BBQ & Beverage Free Pairing",
        ja: "18:00 - 20:00 限定 プレミアムBBQ＆ドリンク無制限ペアリング"
      },
      bannerImage: "img/sunset_cheers_banner.jpg",
      items: [
        {
          name: { 
            ko: "Sunset Cheers Hour+ (1인)", 
            en: "Sunset Cheers Hour+ (Per Person)",
            ja: "Sunset Cheers Hour+ (お一人様)"
          },
          price: 77000,
          image: "img/sunset_cheers_banner.jpg",
          highlight: true,
          badge: { ko: "인기 시그니처", en: "Best Value", ja: "おすすめ" },
          desc: {
            ko: "이용시간 18:00 ~ 20:00 (입장 마감 19:00 / 픽업 마감 19:30). 샤퀴테리 & 치즈, 프리미엄 BBQ (양갈비, 치킨, 그릴 새우), 신선한 고메 셀렉션, 프리미엄 디저트 + 하드 리큐어(DIY 하이볼 & 칵테일), 와인(스파클링/화이트/레드), 한맥 생맥주, 소프트 드링크 무제한 즐기기.",
            en: "Available Hours 6:00 PM - 8:00 PM (Last Entry 7:00 PM | Last Pick up 7:30 PM). Includes Charcuterie & Cheese, Premier BBQ (lamb, chicken, shrimp), Gourmet daily specials, Desserts + Hard Liquors (DIY Highball), Wine, Korean Draft Beer, Soft drinks.",
            ja: "ご利用時間 18:00〜20:00（最終入場 19:00 / フード受取 19:30）。シャルキュトリー＆チーズ、プレミアムBBQ（ラムチョップ、チキン、グリルエビ）、グルメセレクション、デザート ＋ ハードリカー（DIYハイボール）、ワイン、生ビール、ソフトドリンク飲み放題。"
          },
          note: {
            ko: "* 테이블 전원 주문 필수, 추가 주문 없을 시 20:00 좌석 이용 종료",
            en: "* All guests at the table are required to order. Table use ends at 8:00 PM without additional orders.",
            ja: "※ テーブル全員のご注文が必須です。追加注文がない場合、20:00でお席のご利用は終了となります。"
          }
        }
      ]
    },
    {
      id: "jazz_night",
      name: { ko: "재즈 나이트 세트", en: "Jazz Night Menu", ja: "ジャズナイト・セット" },
      icon: "🎷",
      desc: { 
        ko: "매주 수·목·금 라이브 재즈 공연 (20:00 / 21:00 / 22:00)", 
        en: "Every Wed, Thu, Fri Live Jazz (8PM, 9PM, 10PM)",
        ja: "毎週 水・木・金 ライブジャズ公演 (20:00 / 21:00 / 22:00)"
      },
      bannerImage: "img/media_1791745185132_0f531b8c.jpg",
      subsections: [
        {
          title: { 
            ko: "위스키 세트 (과일 & 치즈 플래터 포함)", 
            en: "Whisky Set (+ Fruits & Cheese Platter)",
            ja: "ウイスキーセット (+ フルーツ＆チーズ盛り合わせ)"
          },
          items: [
            { 
              name: { ko: "글렌알라키 12년 + 플래터", en: "Glenallachie 12Y + Platter", ja: "グレンアラヒー 12年 + プラッター" }, 
              price: 380000, 
              desc: { ko: "글렌알라키 12년 바틀 + 과일 & 치즈 플래터 세트", en: "Glenallachie 12Y Bottle + Fruits & Cheese Platter", ja: "グレンアラヒー12年ボトル ＋ フルーツ＆チーズ盛り合わせ" } 
            },
            { 
              name: { ko: "글렌알라키 15년 + 플래터", en: "Glenallachie 15Y + Platter", ja: "グレンアラヒー 15年 + プラッター" }, 
              price: 620000, 
              desc: { ko: "글렌알라키 15년 바틀 + 과일 & 치즈 플래터 세트", en: "Glenallachie 15Y Bottle + Fruits & Cheese Platter", ja: "グレンアラヒー15年ボトル ＋ フルーツ＆チーズ盛り合わせ" } 
            },
            { 
              name: { ko: "발베니 12년 더블 우드 + 플래터", en: "The Balvenie 12Y Double Wood + Platter", ja: "バルヴェニー 12年 ダブルウッド + プラッター" }, 
              price: 420000, 
              desc: { ko: "발베니 12년 바틀 + 과일 & 치즈 플래터 세트", en: "The Balvenie 12Y Bottle + Fruits & Cheese Platter", ja: "バルヴェニー12年ダブルウッド ＋ フルーツ＆チーズ盛り合わせ" } 
            },
            { 
              name: { ko: "발베니 14년 캐리비안 캐스크 + 플래터", en: "The Balvenie 14Y Caribbean Cask + Platter", ja: "バルヴェニー 14年 カリビアンカスク + プラッター" }, 
              price: 600000, 
              desc: { ko: "발베니 14년 바틀 + 과일 & 치즈 플래터 세트", en: "The Balvenie 14Y Bottle + Fruits & Cheese Platter", ja: "バルヴェニー14年カリビアンカスク ＋ フルーツ＆チーズ盛り合わせ" } 
            }
          ]
        },
        {
          title: { 
            ko: "와인 & 샴페인 세트 (과일 & 치즈 플래터 포함)", 
            en: "Wine & Champagne Set (+ Platter)",
            ja: "ワイン＆シャンパンセット (+ プラッター)"
          },
          items: [
            { 
              name: { ko: "샴페인 루이 뒤몽 + 플래터", en: "Champagne Louis Dumont + Platter", ja: "シャンパーニュ ルイ・デュモン + プラッター" }, 
              price: 250000, 
              desc: { ko: "루이 뒤몽 샴페인 바틀 + 과일 & 치즈 플래터", en: "Louis Dumont Bottle + Fruits & Cheese Platter", ja: "ルイ・デュモン シャンパンボトル ＋ プラッター" } 
            },
            { 
              name: { ko: "화이트와인 베르띠에 상세르 블랑 + 플래터", en: "White Wine Berthier Sancerre Blanc + Platter", ja: "白ワイン ベルティエ サンセール・ブラン + プラッター" }, 
              price: 250000, 
              desc: { ko: "프랑스 상세르 쇼비뇽 블랑 + 과일 & 치즈 플래터", en: "Berthier Sancerre Blanc Bottle + Fruits & Cheese Platter", ja: "フランス サンセール ソーヴィニヨン・ブラン ＋ プラッター" } 
            },
            { 
              name: { ko: "레드와인 풀리아 팝 루미나리아 + 플래터", en: "Red Wine Puglia Pop Luminaria + Platter", ja: "赤ワイン プーリア・ポップ ルミナリア + プラッター" }, 
              price: 250000, 
              desc: { ko: "이탈리아 풀리아 프리미티보 + 과일 & 치즈 플래터", en: "Puglia Pop Luminaria Bottle + Fruits & Cheese Platter", ja: "イタリア プーリア プリミティーヴォ ＋ プラッター" } 
            }
          ]
        }
      ]
    },
    {
      id: "promotions",
      name: { ko: "위스키 프로모션", en: "Whisky Promotion", ja: "ウイスキープロモーション" },
      icon: "🥃",
      desc: { 
        ko: "프로모션 위스키 보틀 주문 시 쁘띠 플래터(과일&치즈) 무료 제공", 
        en: "Free Petite Platter served with promotional whisky bottles",
        ja: "プロモーションボトルをご注文時、プチプラッター（フルーツ＆チーズ）無料サービス"
      },
      bannerImage: "img/promotions_banner.jpg",
      items: [
        { name: { ko: "글렌알라키 12년 (보틀)", en: "Glenallachie 12Y (Bottle)", ja: "グレンアラヒー 12年 (ボトル)" }, price: 350000, badge: { ko: "추천", en: "Promo", ja: "おすすめ" }, desc: { ko: "스페이사이드 싱글몰트 + 쁘띠 플래터 증정", en: "Speyside Single Malt + Free Petite Platter", ja: "スペイサイド シングルモルト ＋ プチプラッター付き" } },
        { name: { ko: "글렌알라키 15년 (보틀)", en: "Glenallachie 15Y (Bottle)", ja: "グレンアラヒー 15年 (ボトル)" }, price: 590000, desc: { ko: "스페이사이드 싱글몰트 + 쁘띠 플래터 증정", en: "Speyside Single Malt + Free Petite Platter", ja: "スペイサイド シングルモルト ＋ プチプラッター付き" } },
        { name: { ko: "글렌알라키 18년 (보틀)", en: "Glenallachie 18Y (Bottle)", ja: "グレンアラヒー 18年 (ボトル)" }, price: 1000000, desc: { ko: "최고급 셰리 오크 숙성 위스키 + 쁘띠 플래터 증정", en: "Premium Sherry Cask + Free Petite Platter", ja: "最高級シェリー樽熟成 ＋ プチプラッター付き" } },
        { name: { ko: "발베니 12년 더블 우드 (보틀)", en: "Balvenie 12Y Double Wood (Bottle)", ja: "バルヴェニー 12年 ダブルウッド (ボトル)" }, price: 390000, badge: { ko: "베스트", en: "Best", ja: "人気No.1" }, desc: { ko: "발베니 대표 시그니처 + 쁘띠 플래터 증정", en: "Speyside Single Malt + Free Petite Platter", ja: "代表的シングルモルト ＋ プチプラッター付き" } },
        { name: { ko: "발베니 14년 캐리비안 캐스크 (보틀)", en: "Balvenie 14Y Caribbean Cask (Bottle)", ja: "バルヴェニー 14年 カリビアンカスク (ボトル)" }, price: 570000, desc: { ko: "럼 캐스크 피니시의 달콤함 + 쁘띠 플래터 증정", en: "Rum Cask Finish + Free Petite Platter", ja: "ラム樽仕上げの芳醇な甘み ＋ プチプラッター付き" } },
        { name: { ko: "라세이 던 카나 세리 (보틀)", en: "Raasay Dun Cana Sherry (Bottle)", ja: "ラッセイ ダンカナ シェリー (ボトル)" }, price: 370000, desc: { ko: "하이랜드 라세이 증류소 시그니처 셰리 + 쁘띠 플래터 증정", en: "Highland Raasay Cask + Free Petite Platter", ja: "ハイランド ラッセイ蒸留所 ＋ プチプラッター付き" } }
      ]
    },
    {
      id: "cocktails",
      name: { ko: "시그니처 & 칵테일", en: "Signature & Cocktails", ja: "シグネチャー＆カクテル" },
      icon: "🍸",
      desc: { 
        ko: "루프탑의 감성을 담은 시그니처 & 클래식 칵테일", 
        en: "Handcrafted signatures and classic cocktails",
        ja: "ルーフトップの感性を込めたシグネチャー＆クラシックカクテル"
      },
      bannerImage: "img/media_1791741386217_d9bb0e89.png",
      subsections: [
        {
          title: { ko: "Kloud 베스트 시그니처", en: "Kloud Signature Favorites", ja: "Kloud 代表シグネチャー" },
          items: [
            {
              name: { ko: "AC 토닉", en: "AC Tonic", ja: "AC トニック" },
              price: 33000,
              badge: { ko: "대표 칵테일", en: "Signature", ja: "代表カクテル" },
              tags: ["Crisp", "Botanical", "Refreshing", "Clean"],
              desc: { 
                ko: "진의 깊은 보태니컬 풍미와 토닉의 청량감이 완벽한 조화를 이루는 클라우드 대표 진토닉", 
                en: "Kloud signature gin tonic balancing botanical notes with crisp effervescence.",
                ja: "ジンの深いボタニカルな風味とトニックの爽快感が調和する代表ジントニック。"
              }
            },
            {
              name: { ko: "클라우드 선셋", en: "Kloud Sunset", ja: "クラウド・サンセット" },
              price: 33000,
              badge: { ko: "인기 칵테일", en: "Popular", ja: "人気カクテル" },
              tags: ["Fruity", "Sweet", "Citrusy", "Floral"],
              desc: { 
                ko: "자몽의 산뜻함과 리치의 달콤함이 어우러져 루프탑의 석양 노을을 형상화한 시그니처 칵테일", 
                en: "Inspired by the sunset at Kloud, layered with refreshing grapefruit and sweet lychee.",
                ja: "グレープフルーツの爽やかさとライチの甘みが調和した夕暮れのシグネチャーカクテル。"
              }
            }
          ]
        },
        {
          title: { ko: "The Myth of Autumn (그리스 신화 가을 시즌 칵테일)", en: "The Myth of Autumn (Seasonal)", ja: "The Myth of Autumn (秋の特別カクテル)" },
          items: [
            {
              name: { ko: "01 에우리디케", en: "01 Eurydice", ja: "01 エウリュディケ" },
              price: 33000,
              image: "img/cocktail_eurydice.jpg",
              tags: ["Delicate", "Floral", "Clear", "Airy", "Silken"],
              desc: { 
                ko: "배와 엘더플라워, 백차의 향이 맑게 이어지는 칵테일", 
                en: "Pear, elderflower, and white tea notes, delicate and clear.",
                ja: "洋梨とエルダーフラワー、白茶の香りが澄んだように広がるカクテル。"
              }
            },
            {
              name: { ko: "02 오르페우스", en: "02 Orpheus", ja: "02 オルフェウス" },
              price: 33000,
              image: "img/cocktail_orpheus.jpg",
              tags: ["Herbal", "Honeyed", "Citrusy", "Sparkling", "Light"],
              desc: { 
                ko: "허브와 꿀의 달콤함에 시트러스 소다를 더한 가벼운 칵테일", 
                en: "Herbal and honeyed notes with citrus soda, light and sparkling.",
                ja: "ハーブとはちみつの甘さにシトラスソーダを加えた爽快なカクテル。"
              }
            },
            {
              name: { ko: "03 하데스", en: "03 Hades", ja: "03 ハデス" },
              price: 33000,
              image: "img/cocktail_hades.jpg",
              tags: ["Bittersweet", "Warm", "Deep", "Smoky", "Velvety"],
              desc: { 
                ko: "카카오 닙스와 버번의 온기가 깊게 이어지는 스모키 칵테일", 
                en: "Cacao nibs and warm bourbon notes, deep and smoky.",
                ja: "カカオニブとバーボンの温もりが深く続くスモーキーカクテル。"
              }
            },
            {
              name: { ko: "04 페르세포네", en: "04 Persephone", ja: "04 ペルセポネ" },
              price: 33000,
              image: "img/cocktail_persephone.png",
              tags: ["Tart", "Floral", "Bright", "Elegant", "Citrusy"],
              desc: { 
                ko: "석류의 산미와 플로럴 향이 어우러진 우아한 칵테일", 
                en: "Tart pomegranate and floral notes, elegant and bright.",
                ja: "ザクロの酸味と華やかなフローラルの香りが調和した優雅なカクテル。"
              }
            }
          ]
        },
        {
          title: { ko: "한국 전통 시그니처 & 클래식 칵테일", en: "Korean Signatures & Classics", ja: "韓国伝統シグネチャー＆クラシック" },
          items: [
            {
              name: { ko: "선비 (Son-Bi)", en: "Son-Bi", ja: "ソンビ (Son-Bi)" },
              price: 33000,
              badge: { ko: "한국 전통주 베이스", en: "Korean Gin", ja: "韓国ジン" },
              desc: { 
                ko: "선비 진, 레몬, 문경 오미자 (Sweet & Sour / 중간 도수)", 
                en: "Son-Bi Gin, Lemon, Schisandra (Omija) - Sweet & Sour",
                ja: "ソンビジン、レモン、五味子（オミジャ）- 甘酸っぱく上品な味わい"
              }
            },
            {
              name: { ko: "청명 (Cheong-Myung)", en: "Cheong-Myung", ja: "チョンミョン (Cheong-Myung)" },
              price: 33000,
              badge: { ko: "한국 전통주 베이스", en: "Korean Spirit", ja: "韓国伝統酒" },
              desc: { 
                ko: "청명주, 릴레 블랑 (Aromatic, Crisp / 중간 도수)", 
                en: "Cheong-Myung Ju, Lillet Blanc - Crisp & Aromatic",
                ja: "伝統酒 清明酒（チョンミョンジュ）、リレ・ブラン - 爽やかで芳醇"
              }
            },
            {
              name: { ko: "프렌치 75 (French 75)", en: "French 75", ja: "フレンチ 75" },
              price: 30000,
              desc: { ko: "헤이먼스 진, 카바, 레몬, 시럽", en: "Hayman's Gin, Cava, Lemon, Syrup", ja: "ヘイマンズジン、カヴァ、レモン、シロップ" }
            },
            {
              name: { ko: "불라 칼바도스 올드 패션드", en: "Boulard Calvados Old Fashioned", ja: "ブラー カルヴァドス オールドファッションド" },
              price: 30000,
              desc: { ko: "불라 사과 브랜디 칼바도스, 데메라라, 앙고스투라", en: "Boulard Calvados, Demerara, Angostura", ja: "ブラー カルヴァドス（林檎ブランデー）、デメララ、アンゴスチュラ" }
            },
            {
              name: { ko: "엘 프레지덴테 (El Presidente)", en: "El Presidente", ja: "エル・プレジデンテ" },
              price: 30000,
              desc: { ko: "다크 럼, 드라이 베르무트, 큐라소, 그레나딘", en: "Dark Rum, Dry Vermouth, Curacao, Grenadine", ja: "ダークラム、ドライベルモット、キュラソー、グレナデン" }
            },
            {
              name: { ko: "아페롤 스프리츠 (Aperol Spritz)", en: "Aperol Spritz", ja: "アペロール・スプリッツ" },
              price: 30000,
              desc: { ko: "아페롤, 카바, 소다 (상큼하고 가벼운 식전주)", en: "Aperol, Cava, Soda - Light & Refreshing", ja: "アペロール、カヴァ、ソーダ - 爽快なイタリアン食前酒" }
            },
            {
              name: { ko: "갓 파더 (God Father)", en: "God Father", ja: "ゴッドファーザー" },
              price: 30000,
              desc: { ko: "스카치 위스키, 아마레또, 시나몬", en: "Scotch Whisky, Amaretto, Cinnamon", ja: "スコッチウイスキー、アマレット、シナモン" }
            },
            {
              name: { ko: "글렌피딕 12년 하이볼", en: "Glenfiddich 12Y Highball", ja: "グレンフィディック 12年 ハイボール" },
              price: 37000,
              desc: { ko: "싱글몰트 위스키 하이볼", en: "Single Malt Whisky Highball", ja: "シングルモルト ハイボール" }
            },
            {
              name: { ko: "조니워커 블랙 하이볼", en: "Johnnie Walker Black Highball", ja: "ジョニーウォーカー ブラック ハイボール" },
              price: 32000,
              desc: { ko: "스카치 블렌디드 하이볼", en: "Blended Scotch Highball", ja: "スコッチ ブレンデッド ハイボール" }
            },
            {
              name: { ko: "잭다니엘 No.7 하이볼", en: "Jack Daniel's Old No.7 Highball", ja: "ジャックダニエル No.7 ハイボール" },
              price: 30000,
              desc: { ko: "클래식 테네시 하이볼", en: "Tennessee Whiskey Highball", ja: "クラシック アメリカンハイボール" }
            }
          ]
        }
      ]
    },
    {
      id: "food",
      name: { ko: "다이닝 푸드 & 스낵", en: "Dining & Snacks", ja: "フード＆スナック" },
      icon: "🍽️",
      desc: { 
        ko: "스테이크, 파스타, 피자 및 프리미엄 바 스낵", 
        en: "Steaks, Pastas, Artisan Pizzas & Bar Snacks",
        ja: "ステーキ、パスタ、ピザ、プレミアムバースナック"
      },
      subsections: [
        {
          title: { ko: "스테이크 (Steak)", en: "Steak", ja: "ステーキ" },
          items: [
            { 
              name: { ko: "U.S. 프라임 비프 안심 스테이크 (150g)", en: "U.S. Prime Beef Tenderloin (150g)", ja: "USプライム牛ヒレステーキ (150g)" }, 
              price: 85000, 
              badge: { ko: "대표 스테이크", en: "Signature Steak", ja: "おすすめステーキ" },
              donenessOptions: ["Rare", "Medium Rare", "Medium", "Medium Well", "Well Done"],
              desc: { 
                ko: "U.S. 프라임 비프, 구운 야채, 프렌치 프라이, 포트와인 소스, 흑마늘 무화과 볼", 
                en: "U.S Prime beef, grilled vegetables, french fries, port wine sauce, black garlic fig ball",
                ja: "USプライムビーフ、グリル野菜、フレンチフライ、ポートワインソース、黒ニンニクイチジクボール"
              } 
            },
            { 
              name: { ko: "양갈비 스테이크 (250g)", en: "Lamb Chop (250g)", ja: "ラムチョップステーキ (250g)" }, 
              price: 84000, 
              badge: { ko: "인기 스테이크", en: "Popular", ja: "人気" },
              donenessOptions: ["Medium Rare", "Medium", "Medium Well", "Well Done"],
              desc: { 
                ko: "호주산 프리미엄 양갈비(250g), 구운 야채, 프렌치 프라이, 레드와인 소스, 흑마늘 무화과 볼", 
                en: "Premium Australian lamb chop (250g), grilled vegetables, french fries, red wine sauce, black garlic fig ball",
                ja: "豪州産高級ラムチョップ (250g)、グリル野菜、フレンチフライ、赤ワインソース、黒ニンニクイチジクボール"
              } 
            }
          ]
        },
        {
          title: { ko: "샐러드 (Salad)", en: "Salad", ja: "サラダ" },
          items: [
            { 
              name: { ko: "로메인 샐러드", en: "Romaine Salad", ja: "ロメインサラダ" }, 
              price: 33000, 
              desc: { ko: "로메인, 치킨, 크루통, 레몬 웨지, 시저 드레싱, 그라나파다노 치즈", en: "Romaine, chicken, crouton, lemon wedge, caesar dressing, granapadano", ja: "ロメインレタス、チキン、クルトン、シーザードレッシング" } 
            },
            { 
              name: { ko: "부라타 샐러드", en: "Burrata Salad", ja: "ブッラータサラダ" }, 
              price: 35000, 
              desc: { ko: "신선한 부라타 치즈, 토마토, 루꼴라, 바질 페스토, 발사믹 드레싱", en: "Fresh burrata cheese, tomato, arugula, basil pesto, balsamic dressing", ja: "新鮮なブッラータチーズ、トマト、ルッコラ、バジルペスト" } 
            }
          ]
        },
        {
          title: { ko: "파스타 & 리조또 & 피자", en: "Pasta, Risotto & Pizza", ja: "パスタ・リゾット・ピザ" },
          items: [
            { 
              name: { ko: "랍스터 파스타 (오일/토마토/크림 택1)", en: "Lobster Pasta (Oil/Tomato/Cream)", ja: "ロブスターパスタ (オイル/トマト/クリーム)" }, 
              price: 55000, 
              badge: { ko: "인기 메뉴", en: "Popular", ja: "人気メニュー" }, 
              desc: { ko: "랍스터 테일, 홍가리비, 새우, 오징어, 전복, 관자, 스파게티니", en: "Lobster, red scallops, shrimp, squid, abalone, scallop, spaghettini", ja: "ロブスターテール、ホタテ、エビ、イカ、アワビ、スパゲッティーニ" } 
            },
            { 
              name: { ko: "해산물 파스타 (오일/토마토/크림 택1)", en: "Seafood Pasta (Oil/Tomato/Cream)", ja: "シーフードパスタ (オイル/トマト/クリーム)" }, 
              price: 39000, 
              desc: { ko: "다양한 신선 해산물 스파게티니 (*비건 옵션 가능)", en: "Fresh assorted seafood spaghettini (*Vegan available)", ja: "新鮮な魚介のスパゲッティーニ（※ヴィーガン対応可）" } 
            },
            { 
              name: { ko: "U.S. 프라임 비프 라자냐", en: "U.S. Prime Beef Lasagna", ja: "USプライムビーフ ラザニア" }, 
              price: 39000, 
              desc: { ko: "볼로네제 소스, 베샤멜, 루꼴라, 모짜렐라 그라탕", en: "Bolognese sauce, beschamel, arugula, mozzarella gratin", ja: "ボロネーゼソース、ベシャメル、ルッコラ、モッツァレラグラタン" } 
            },
            { 
              name: { ko: "갈릭 올리브 파스타 (비건)", en: "Garlic & Olive Pasta (Vegan)", ja: "ガーリック＆オリーブ パスタ (ヴィーガン)" }, 
              price: 34000, 
              badge: { ko: "비건(Vegan)", en: "Vegan", ja: "ヴィーガン" }, 
              desc: { ko: "마늘, 믹스 올리브, 레몬, 루꼴라, 엑스트라 버진 올리브 오일", en: "Garlic, mixed olive, lemon, arugula, olive oil", ja: "ニンニク、ミックスオリーブ、レモン、ルッコラ、オリーブオイル" } 
            },
            { 
              name: { ko: "트러플 버섯 리조또", en: "Truffle Mushroom Risotto", ja: "トリュフきのこリゾット" }, 
              price: 39000, 
              desc: { ko: "트러플 오일, 포르치니 버섯, 그라나파다노 치즈", en: "Truffle oil, porcini mushrooms, granapadano cheese", ja: "トリュフオイル、ポルチーニ茸、グラナパダーノチーズ" } 
            },
            { 
              name: { ko: "클라우드 부라타 & 프로슈토 피자", en: "Kloud Burrata & Prosciutto Pizza", ja: "ブッラータ＆プロシュート ピザ" }, 
              price: 36000, 
              desc: { ko: "토마토 소스, 모짜렐라 치즈, 부라타 치즈, 프로슈토, 루꼴라", en: "Tomato sauce, mozzarella, fresh burrata, prosciutto, arugula", ja: "トマトソース、モッツァレラ、ブッラータチーズ、プロシュート、ルッコラ" } 
            },
            { 
              name: { ko: "트러플 풍기 비앙카 피자", en: "Truffle Funghi Bianca Pizza", ja: "トリュフ・フンギ・ビアンカ ピザ" }, 
              price: 36000, 
              desc: { ko: "모둠 버섯, 머쉬룸 크림, 모짜렐라 치즈, 트러플 오일", en: "Mushroom, mushroom cream, mozzarella, truffle oil", ja: "キノコ各種、マッシュルームクリーム、モッツァレラ、トリュフオイル" } 
            },
            { 
              name: { ko: "U.S. 프라임 비프 버거", en: "U.S Prime Beef Burger", ja: "USプライムビーフ バーガー" }, 
              price: 38000, 
              desc: { ko: "프라임 비프 패티, 베이컨, 브리치즈, 피클, 계란 후라이", en: "Prime beef, bacon, brie cheese, pickles, fried egg", ja: "プライムビーフパティ、ベーコン、ブリーチーズ、フライドエッグ" } 
            },
            { 
              name: { ko: "랍스터 롤 & 프렌치 프라이", en: "Lobster Roll & French Fries", ja: "ロブスターロール＆フレンチフライ" }, 
              price: 57000, 
              desc: { ko: "브리오슈 번, 랍스터, 새우, 성게알(우니), 아브루가 캐비어", en: "Brioche, lobster, shrimp, french fries, sea urchin, avruga", ja: "ブリオッシュ、ロブスター、海老、ウニ、キャビア" } 
            },
            { 
              name: { ko: "구운 갑오징어 샐러드", en: "Grilled Cuttlefish Salad", ja: "グリルコウイカ サラダ" }, 
              price: 65000, 
              desc: { ko: "부드럽게 구운 갑오징어, 아이올리, 레몬 허브 샐러드", en: "Grilled cuttlefish, aioli, lemon herb salad", ja: "香ばしく焼き上げたコウイカ、アイオリ、レモンハーブサラダ" } 
            }
          ]
        },
        {
          title: { ko: "바 스낵 (Bar Snacks)", en: "Bar Snacks", ja: "バースナック" },
          items: [
            { 
              name: { ko: "클라우드 플래터 (샤퀴테리 & 치즈)", en: "Kloud Platter", ja: "クラウド・プラッター" }, 
              price: 88000, 
              badge: { ko: "대표 안주", en: "Best Platter", ja: "代表プラッター" }, 
              desc: { ko: "프리미엄 샤퀴테리(하몽/살라미), 모둠 치즈, 제철 생과일", en: "Charcuterie, assorted premium cheese, seasonal fruits", ja: "高級シャルキュトリー、チーズ盛り合わせ、旬のフルーツ" } 
            },
            { 
              name: { ko: "그릴에 구운 문어", en: "Grilled Octopus", ja: "グリルタコ" }, 
              price: 43000, 
              desc: { ko: "그릴 문어, 감자, 토마토, 올리브, 이탈리안 드레싱", en: "Grilled octopus, potato, tomato, olive, Italian dressing", ja: "タコのグリル、ポテト、トマト、オリーブ、イタリアンドレッシング" } 
            },
            { 
              name: { ko: "버팔로 윙 & 윙스틱", en: "Buffalo Wing", ja: "バッファローウィング" }, 
              price: 38000, 
              desc: { ko: "버팔로 윙, 스위트 칠리 소스, 타르타르 소스", en: "Buffalo wing, sweet chilli sauce, tartar sauce", ja: "バッファローウィング、チリソース、タルタルソース" } 
            },
            { 
              name: { ko: "프라이드 치킨 & 흑임자 아이올리", en: "Fried Chicken", ja: "フライドチキン＆黒ごまアイオリ" }, 
              price: 38000, 
              desc: { ko: "바삭한 순살 치킨, 고소한 흑임자 아이올리 소스", en: "Crispy chicken, black sesame aioli", ja: "サクサクのフライドチキン、香ばしい黒ごまアイオリソース" } 
            },
            { 
              name: { ko: "피쉬 앤 칩스", en: "Fish & Chips", ja: "フィッシュ＆チップス" }, 
              price: 39000, 
              desc: { ko: "바삭한 대구 생선튀김, 감자튀김, 타르타르 소스", en: "Fried cod fish, french fries, tartar sauce", ja: "タラのフライ、フレンチフライ、タルタルソース" } 
            },
            { 
              name: { ko: "그리시니 프로슈토", en: "Grissini Prosciutto", ja: "グリッシーニ・プロシュート" }, 
              price: 42000, 
              desc: { ko: "그리시니 스틱, 프로슈토 생햄, 달콤한 멜론, 올리브", en: "Grissini stick, prosciutto, sweet melon, olives", ja: "グリッシーニ、生ハム（プロシュート）、メロン、オリーブ" } 
            },
            { 
              name: { ko: "과카몰레 나초 & 트러플 감자튀김", en: "Guacamole Nacho & Truffle Fries", ja: "ワカモレナチョス＆トリュフポテト" }, 
              price: 38000, 
              desc: { ko: "나초, 과카몰레, 살사, 감자튀김, 트러플 마요네즈", en: "Nacho, guacamole, salsa, fries, truffle mayo", ja: "ナチョス、ワカモレ、サルサ、ポテトフライ、トリュフマヨ" } 
            }
          ]
        },
        {
          title: { ko: "디저트 (Desserts)", en: "Desserts & Sweets", ja: "デザート" },
          items: [
            { name: { ko: "샤인머스켓 트리", en: "Shine Muscat Tree", ja: "シャインマスカット・ツリー" }, price: 44000, badge: { ko: "인기 디저트", en: "Signature", ja: "大人気" }, desc: { ko: "신선한 샤인머스켓을 듬뿍 쌓아 올린 비주얼 특선 디저트", en: "Lavish tree of sweet shine muscat grapes", ja: "贅沢に盛り付けたシャインマスカットの特別デザート" } },
            { name: { ko: "애플 망고 케이크", en: "Apple Mango Cake", ja: "アップルマンゴーケーキ" }, price: 28000, desc: { ko: "달콤하고 부드러운 프리미엄 애플망고 케이크", en: "Sweet and delicate apple mango cake", ja: "甘くやさしい風味のアップルマンゴーケーキ" } },
            { name: { ko: "미니 추러스 & 바닐라 아이스크림", en: "Mini Churros & Vanilla Ice Cream", ja: "ミニチュロス＆バニラアイス" }, price: 25000, desc: { ko: "바삭한 미니 츄러스와 시원한 바닐라 아이스크림", en: "Crispy mini churros with vanilla ice cream", ja: "温かいチュロスと冷たいバニラアイスのセット" } }
          ]
        }
      ]
    },
    {
      id: "wines",
      name: { ko: "와인 & 샴페인", en: "Wine & Champagne", ja: "ワイン＆シャンパン" },
      icon: "🍷",
      desc: { 
        ko: "글라스 와인은 전용 3종(레드/화이트/스파클링)이 전부이며, 모든 레드 와인·화이트 와인·샴페인은 보틀(Bottle)로만 판매합니다.", 
        en: "Wine by the Glass is limited to the 3 house selections above. All other Red, White, and Champagnes are sold by Bottle only.",
        ja: "グラスワインは上記3種（赤・白・泡）のみの提供となり、その他の赤ワイン・白ワイン・シャンパンはすべてボトル（Bottle）限定販売となります。"
      },
      subsections: [
        {
          title: { ko: "글라스 와인 (By the Glass)", en: "By the Glass", ja: "グラスワイン (By the Glass)" },
          notice: {
            ko: "※ 글라스 와인은 아래 3종(레드/화이트/스파클링)이 전부입니다. 그 외 모든 레드 와인, 화이트 와인, 샴페인은 보틀(Bottle)로만 판매합니다.",
            en: "※ Wine by the Glass is available ONLY for the 3 selections below. All other Red Wines, White Wines, and Champagnes are sold by Full Bottle only.",
            ja: "※ グラスワインは下記3種（赤・白・泡）のみとなります。その他の赤・白・シャンパンはすべてボトル（Bottle）のみの販売となります。"
          },
          items: [
            { name: { ko: "하우스 레드 와인 (글라스)", en: "Red Wine by the Glass", ja: "ハウス赤ワイン (グラス)" }, price: 28000, desc: { ko: "소믈리에 엄선 오늘의 레드 와인", en: "Sommelier selected house red wine", ja: "ソムリエ厳選 本日の赤ワイン" } },
            { name: { ko: "하우스 화이트 와인 (글라스)", en: "White Wine by the Glass", ja: "ハウス白ワイン (グラス)" }, price: 28000, desc: { ko: "소믈리에 엄선 오늘의 화이트 와인", en: "Sommelier selected house white wine", ja: "ソムリエ厳選 本日の白ワイン" } },
            { name: { ko: "하우스 스파클링 와인 (글라스)", en: "Sparkling Wine by the Glass", ja: "ハウス泡ワイン (グラス)" }, price: 28000, desc: { ko: "소믈리에 엄선 오늘의 스파클링 와인", en: "Sommelier selected house sparkling wine", ja: "ソムリエ厳選 本日のスパークリング" } }
          ]
        },
        {
          title: { ko: "샴페인 (Champagne - 보틀 전용)", en: "Champagne (Bottle Only)", ja: "シャンパーニュ (ボトル限定)" },
          notice: {
            ko: "※ 샴페인은 전 품목 보틀(Bottle)로만 판매합니다.",
            en: "※ All Champagnes are served by Full Bottle only.",
            ja: "※ シャンパンは全銘柄ボトル（Bottle）販売限定となります。"
          },
          items: [
            { name: { ko: "크룩 그랑 퀴베 스페셜 172에디션", en: "Krug Grande Cuvée Special 172ème", ja: "クリュッグ グランド・キュヴェ 172エディション" }, price: 950000, vintage: "172ème", desc: { ko: "Pinot Noir 44%, Chardonnay 36%, Pinot Meunier 20%", en: "France Champagne", ja: "フランス シャンパーニュ最高峰" } },
            { name: { ko: "돔 페리뇽 브뤼 2015", en: "Dom Pérignon Brut 2015", ja: "ドン・ペリニヨン ブリュット 2015" }, price: 850000, vintage: "2015", desc: { ko: "Pinot Noir 51%, Chardonnay 49%", en: "France Champagne", ja: "フランス シャンパーニュ" } },
            { name: { ko: "샴페인 드 브노쥬 프린스 뚜르 에펠", en: "Champagne De Venoge 'Princes Tour Eiffel'", ja: "シャンパーニュ ド・ヴノージュ プランス エッフェル塔" }, price: 630000, vintage: "N/V", desc: { ko: "Chardonnay 33%, Pinot Noir 33%, Pinot Meunier 33%", en: "France Champagne", ja: "フランス シャンパーニュ" } },
            { name: { ko: "크리스토프 미뇽 브뤼", en: "Christophe Mignon Brut", ja: "クリストフ・ミニョン ブリュット" }, price: 550000, vintage: "N/V", desc: { ko: "Pinot Meunier 100%", en: "France Champagne", ja: "ピノ・ムニエ 100%" } },
            { name: { ko: "크리스티앙 고쉐 A03 브뤼", en: "Christian Gosset A03 Brut", ja: "クリスチャン・ゴセ A03 ブリュット" }, price: 350000, vintage: "N/V", desc: { ko: "Chardonnay 85%, Pinot Noir 15%", en: "France Champagne", ja: "フランス シャンパーニュ" } },
            { name: { ko: "텔몽 브뤼 프레스티지", en: "Telmont Brut Prestige", ja: "テルモン ブリュット プレステージ" }, price: 310000, vintage: "N/V", desc: { ko: "Chardonnay 31%, Pinot Meunier 53%, Pinot Noir 16%", en: "France Champagne", ja: "フランス シャンパーニュ" } },
            { name: { ko: "샴파뉴 로랑 르카르", en: "Champagne Laurent Lequart", ja: "ローラン・ルカール" }, price: 240000, vintage: "N/V", desc: { ko: "France Champagne", en: "France Champagne", ja: "フランス シャンパーニュ" } }
          ]
        },
        {
          title: { ko: "스파클링 와인 (Sparkling - 보틀 전용)", en: "Sparkling Wine (Bottle Only)", ja: "スパークリングワイン (ボトル限定)" },
          notice: {
            ko: "※ 스파클링 와인은 전 품목 보틀(Bottle)로만 판매합니다.",
            en: "※ All Sparkling Wines are served by Full Bottle only.",
            ja: "※ スパークリングワインは全銘柄ボトル（Bottle）限定販売となります。"
          },
          items: [
            { name: { ko: "로저 구라트 브뤼 밀레짐 2022", en: "Roger Goulart Brut Millesime", ja: "ロジャー・グラート ブリュット ミレジメ" }, price: 150000, vintage: "2022", desc: { ko: "스페인 페네데스 Cava", en: "Spain Cava", ja: "スペイン カヴァ" } },
            { name: { ko: "루이 꾸뛰리에 크레망 드 보르도 브뤼", en: "Louis Couturier Cremant de Bordeaux Brut", ja: "ルイ・クトゥリエ クレマン・ド・ボルドー" }, price: 150000, vintage: "N/V", desc: { ko: "프랑스 보르도 크레망", en: "France Bordeaux", ja: "フランス ボルドー" } },
            { name: { ko: "피안카넬리 모스카토 다스티 (SWEET)", en: "Piancanelli Moscato d'Asti (Sweet)", ja: "ピアンカネッリ モスカート・ダスティ (甘口)" }, price: 130000, vintage: "2024", desc: { ko: "이탈리아 달콤하고 향긋한 스파클링", en: "Italy Sweet Moscato", ja: "イタリア 甘口スパークリング" } },
            { name: { ko: "스카르파 모스카토 다스티 (SWEET)", en: "Scarpa Moscato d'Asti (Sweet)", ja: "スカルパ モスカート・ダスティ (甘口)" }, price: 130000, vintage: "2023", desc: { ko: "이탈리아 프리미엄 모스카토 다스티 DOCG", en: "Italy Moscato DOCG", ja: "イタリア DOCG 甘口" } }
          ]
        },
        {
          title: { ko: "화이트 와인 (White Wine - 보틀 전용)", en: "White Wine (Bottle Only)", ja: "白ワイン (ボトル限定)" },
          notice: {
            ko: "※ 화이트 와인은 전 품목 보틀(Bottle)로만 판매합니다.",
            en: "※ All White Wines are served by Full Bottle only.",
            ja: "※ 白ワインは全銘柄ボトル（Bottle）限定販売となります。"
          },
          items: [
            { name: { ko: "도멘 알랜 보네 몽타니 빌라주 2022", en: "Domaine Aline Beaune Montagny Villages", ja: "ドメーヌ アリーヌ・ボーヌ モンタニー・ヴィラージュ" }, price: 330000, vintage: "2022", desc: { ko: "프랑스 부르고뉴 샤도네이 100%", en: "France Bourgogne Chardonnay", ja: "フランス ブルゴーニュ シャルドネ 100%" } },
            { name: { ko: "도멘 알랜 보네 부르고뉴 블랑 2022", en: "Domaine Aline Beaune 'Bourgogne Blanc'", ja: "ドメーヌ アリーヌ・ボーヌ ブルゴーニュ・ブラン" }, price: 250000, vintage: "2022", desc: { ko: "프랑스 부르고뉴 샤도네이 100%", en: "France Bourgogne Chardonnay", ja: "フランス ブルゴーニュ シャルドネ 100%" } },
            { name: { ko: "베르띠에 상세르 블랑 2022", en: "Berthier Sancerre Blanc", ja: "ベルティエ サンセール・ブラン" }, price: 220000, vintage: "2022", desc: { ko: "프랑스 루아르 소비뇽 블랑 100%", en: "France Loire Sauvignon Blanc", ja: "フランス ロワール ソーヴィニヨン・ブラン 100%" } },
            { name: { ko: "스카르파 몬페라토 비앙코 티모라쏘 2021", en: "Scarpa Monferrato Bianco Timorasso", ja: "スカルパ モンフェッラート・ビアンコ ティモラッソ" }, price: 220000, vintage: "2021", desc: { ko: "이탈리아 피에몬테 티모라쏘 100%", en: "Italy Timorasso 100%", ja: "イタリア ピエモンテ" } },
            { name: { ko: "풀리아 팝 리치오 2023", en: "Puglia Pop 'Riccio'", ja: "プーリア・ポップ リッチョ" }, price: 150000, vintage: "2023", desc: { ko: "이탈리아 풀리아 베르데카 100%", en: "Italy Puglia Verdeca", ja: "イタリア プーリア" } },
            { name: { ko: "풀리아 팝 트리리아 로제 2021", en: "Puglia Pop 'Triglia' (Rose)", ja: "プーリア・ポップ トリリア (ロゼ)" }, price: 150000, vintage: "2021", desc: { ko: "이탈리아 로제 와인 (네그로아마로 100%)", en: "Italy Rose Wine", ja: "イタリア ロゼワイン" } },
            { name: { ko: "상파울스 피노 그리지오 2023", en: "St. Pauls Pinot Grigio", ja: "サン・パウルス ピノ・グリージョ" }, price: 160000, vintage: "2023", desc: { ko: "이탈리아 알토 아디제 피노 그리지오", en: "Italy Pinot Grigio", ja: "イタリア ピノ・グリージョ" } },
            { name: { ko: "칼레라 센트럴 코스트 샤도네이 2022", en: "Calera Central Coast Chardonnay", ja: "カレラ セントラル・コースト シャルドネ" }, price: 170000, vintage: "2022", desc: { ko: "미국 캘리포니아 샤도네이 100%", en: "USA California Chardonnay", ja: "アメリカ カリフォルニア シャルドネ" } },
            { name: { ko: "엑스칼리버 쇼비뇽 블랑 2024", en: "Excalibur Sauvignon Blanc", ja: "エクスカリバー ソーヴィニヨン・ブラン" }, price: 170000, vintage: "2024", desc: { ko: "호주 아델레이드 힐스 소비뇽 블랑", en: "Australia Sauvignon Blanc", ja: "オーストラリア ソーヴィニヨン・ブラン" } }
          ]
        },
        {
          title: { ko: "레드 와인 (Red Wine - 보틀 전용)", en: "Red Wine (Bottle Only)", ja: "赤ワイン (ボトル限定)" },
          notice: {
            ko: "※ 레드 와인은 전 품목 보틀(Bottle)로만 판매합니다.",
            en: "※ All Red Wines are served by Full Bottle only.",
            ja: "※ 赤ワインは全銘柄ボトル（Bottle）限定販売となります。"
          },
          items: [
            { name: { ko: "장 필립 마샹, 샹볼 뮈지니 2022", en: "Jean Philippe Marchand, Chambolle Musigny", ja: "ジャン・フィリップ・マルシャン シャンボール・ミュジニー" }, price: 560000, vintage: "2022", desc: { ko: "프랑스 부르고뉴 피노누아 100%", en: "France Bourgogne Pinot Noir", ja: "フランス ブルゴーニュ ピノ・ノワール" } },
            { name: { ko: "스카르파 바롤로 DOCG 떼띠모라 2019", en: "Scarpa Barolo DOCG 'Tettimorra'", ja: "スカルパ バローロ DOCG テッティモッラ" }, price: 460000, vintage: "2019", desc: { ko: "이탈리아 피에몬테 네비올로 100% (이탈리아 와인의 왕)", en: "Italy Piemonte Barolo Nebbiolo", ja: "イタリア ピエモンテ バローロ ネッビオーロ" } },
            { name: { ko: "스카르파 랑게 네비올로 브릭 두 노타 2022", en: "Scarpa Langhe Nebbiolo 'Bric Du Nota'", ja: "スカルパ ランゲ・ネッビオーロ" }, price: 220000, vintage: "2022", desc: { ko: "이탈리아 피에몬테 네비올로 100%", en: "Italy Nebbiolo 100%", ja: "イタリア ピエモンテ ネッビオーロ" } },
            { name: { ko: "스카르파 바르베라 다스티 브리꼬모라 2023", en: "Scarpa Barbera d'Asti 'Briccomora'", ja: "スカルパ バルベーラ・ダスティ" }, price: 160000, vintage: "2023", desc: { ko: "이탈리아 피에몬테 바르베라 100%", en: "Italy Barbera 100%", ja: "イタリア ピエモンテ バルベーラ" } },
            { name: { ko: "풀리아 팝 루미나리아 2021", en: "Puglia Pop 'Luminaria'", ja: "プーリア・ポップ ルミナリア" }, price: 220000, vintage: "2021", desc: { ko: "이탈리아 풀리아 프리미티보 100%", en: "Italy Puglia Primitivo", ja: "イタリア プーリア プリミティーヴォ" } },
            { name: { ko: "풀리아 팝 피코 2021", en: "Puglia Pop 'Fico'", ja: "プーリア・ポップ フィーコ" }, price: 180000, vintage: "2021", desc: { ko: "이탈리아 풀리아 수수마니엘로 100%", en: "Italy Susumaniello 100%", ja: "イタリア プーリア" } },
            { name: { ko: "그랑 사쏘 산지오베제 2022", en: "Gran Sasso Sangiovese", ja: "グラン・サッソ サンジョヴェーゼ" }, price: 150000, vintage: "2022", desc: { ko: "이탈리아 토스카나 산지오베제 100%", en: "Italy Sangiovese 100%", ja: "イタリア トスカーナ" } },
            { name: { ko: "뮤리엘 그랑 리제르바 2016", en: "Muriel Gran Reserva", ja: "ミュリエル グラン・レセルバ" }, price: 170000, vintage: "2016", desc: { ko: "스페인 리오하 템프라니요 100%", en: "Spain Rioja Tempranillo", ja: "スペイン リオハ テンプラニーリョ" } },
            { name: { ko: "오스틴 호프 까베르네 쇼비뇽 2021", en: "Austin Hope Cabernet Sauvignon", ja: "オースティン・ホープ カベルネ・ソーヴィニヨン" }, price: 350000, vintage: "2021", desc: { ko: "미국 나파 밸리 까베르네 쇼비뇽 100%", en: "USA Napa Valley Cabernet", ja: "アメリカ ナパヴァレー カベルネ" } },
            { name: { ko: "리버티 스쿨 까베르네 쇼비뇽 2022", en: "Liberty School Cabernet Sauvignon", ja: "リバティ・スクール カベルネ・ソーヴィニヨン" }, price: 170000, vintage: "2022", desc: { ko: "미국 캘리포니아 까베르네 쇼비뇽", en: "USA California Cabernet", ja: "アメリカ カリフォルニア カベルネ" } },
            { name: { ko: "고스트 파인 멜롯 2019", en: "Ghost Pines, Merlot", ja: "ゴースト・パインズ メルロー" }, price: 160000, vintage: "2019", desc: { ko: "미국 나파/소노마 카운티 멜롯", en: "USA Napa & Sonoma Merlot", ja: "アメリカ メルロー" } },
            { name: { ko: "프레이 브라더스 진판델 2019", en: "Frei Brothers Zinfandel", ja: "フライ・ブラザーズ ジンファンデル" }, price: 160000, vintage: "2019", desc: { ko: "미국 소노마 카운티 진판델", en: "USA Sonoma Zinfandel", ja: "アメリカ ジンファンデル" } },
            { name: { ko: "파울렛 클레어밸리 쉬라즈 2020", en: "Paulett Clare Valley Shiraz", ja: "ポーレット クレア・ヴァレー シラーズ" }, price: 160000, vintage: "2020", desc: { ko: "호주 쉬라즈 100%", en: "Australia Shiraz 100%", ja: "オーストラリア シラーズ" } },
            { name: { ko: "맨션 하우스 베이 피노누아 2020", en: "Mansion House Bay Pinot Noir", ja: "マンション・ハウス・ベイ ピノ・ノワール" }, price: 150000, vintage: "2020", desc: { ko: "뉴질랜드 말보로 피노누아 100%", en: "New Zealand Pinot Noir", ja: "ニュージーランド ピノ・ノワール" } },
            { name: { ko: "카이켄 울트라 말벡 2022", en: "Kaiken Ultra Malbec", ja: "カイケン ウルトラ マルベック" }, price: 160000, vintage: "2022", desc: { ko: "아르헨티나 멘도사 말벡 96%", en: "Argentina Mendoza Malbec", ja: "アルゼンチン マルベック" } }
          ]
        }
      ]
    },
    {
      id: "whisky",
      name: { ko: "위스키 셀렉션", en: "Whisky Collection", ja: "ウイスキーコレクション" },
      icon: "🥃",
      desc: { 
        ko: "스페이사이드, 하이랜드, 아일라 싱글몰트 및 아메리칸, 재패니즈 (글라스/보틀)", 
        en: "Single Malts, Bourbon, Japanese & Taiwanese by Glass & Bottle",
        ja: "シングルモルト、バーボン、ジャパニーズウイスキー（グラス／ボトル）"
      },
      subsections: [
        {
          title: { ko: "싱글몰트 - 스페이사이드 (Speyside)", en: "Single Malt - Speyside", ja: "スペイサイド シングルモルト" },
          items: [
            { name: { ko: "발베니 12년 더블 우드", en: "Balvenie 12Y Double Wood", ja: "バルヴェニー 12年 ダブルウッド" }, glassPrice: 31000, bottlePrice: 390000 },
            { name: { ko: "발베니 14년 캐리비안 캐스크", en: "Balvenie 14Y Caribbean Cask", ja: "バルヴェニー 14年 カリビアンカスク" }, glassPrice: 45000, bottlePrice: 570000 },
            { name: { ko: "발베니 16년 프렌치 오크 캐스크", en: "Balvenie 16Y French Oak Cask", ja: "バルヴェニー 16年 フレンチオーク" }, glassPrice: 68000, bottlePrice: 800000 },
            { name: { ko: "발베니 21년 포트 우드", en: "Balvenie 21Y Port Wood", ja: "バルヴェニー 21年 ポートウッド" }, glassPrice: 127000, bottlePrice: 1500000 },
            { name: { ko: "벤로막 10년", en: "Benromach 10Y", ja: "ベンロマック 10年" }, glassPrice: 26000, bottlePrice: 330000 },
            { name: { ko: "벤로막 15년", en: "Benromach 15Y", ja: "ベンロマック 15年" }, glassPrice: 48000, bottlePrice: 600000 },
            { name: { ko: "글렌알라키 8년", en: "Glenallachie 8Y", ja: "グレンアラヒー 8年" }, glassPrice: 26000, bottlePrice: 330000 },
            { name: { ko: "글렌알라키 10년 캐스크 스트렝스", en: "Glenallachie 10Y Cask Strength", ja: "グレンアラヒー 10年 カスクストレングス" }, glassPrice: 43000, bottlePrice: 540000 },
            { name: { ko: "글렌알라키 12년", en: "Glenallachie 12Y", ja: "グレンアラヒー 12年" }, glassPrice: 28000, bottlePrice: 350000 },
            { name: { ko: "글렌알라키 15년", en: "Glenallachie 15Y", ja: "グレンアラヒー 15年" }, glassPrice: 51000, bottlePrice: 590000 },
            { name: { ko: "글렌알라키 18년", en: "Glenallachie 18Y", ja: "グレンアラヒー 18年" }, glassPrice: 77000, bottlePrice: 1000000 },
            { name: { ko: "글렌피딕 12년", en: "Glenfiddich 12Y", ja: "グレンフィディック 12年" }, glassPrice: 29000, bottlePrice: 360000 },
            { name: { ko: "글렌피딕 15년", en: "Glenfiddich 15Y", ja: "グレンフィディック 15年" }, glassPrice: 37000, bottlePrice: 470000 },
            { name: { ko: "글렌피딕 18년", en: "Glenfiddich 18Y", ja: "グレンフィディック 18年" }, glassPrice: 60000, bottlePrice: 760000 },
            { name: { ko: "더 글렌리벳 12년", en: "The Glenlivet 12Y", ja: "ザ・グレンリベット 12年" }, glassPrice: 28000, bottlePrice: 350000 }
          ]
        },
        {
          title: { ko: "싱글몰트 - 하이랜드, 로우랜드, 아일랜드", en: "Highland, Lowland, Island", ja: "ハイランド・ローランド・アイランズ" },
          items: [
            { name: { ko: "라세이 던 카나 세리", en: "Raasay Dun Cana", ja: "ラッセイ ダンカナ シェリー" }, glassPrice: 30000, bottlePrice: 370000 },
            { name: { ko: "라세이 시그니처", en: "Raasay Signature", ja: "ラッセイ シグネチャー" }, glassPrice: 28000, bottlePrice: 350000 },
            { name: { ko: "달모어 12년", en: "Dalmore 12Y", ja: "ダルモア 12年" }, glassPrice: 32000, bottlePrice: 400000 },
            { name: { ko: "달모어 15년", en: "Dalmore 15Y", ja: "ダルモア 15年" }, glassPrice: 62000, bottlePrice: 770000 },
            { name: { ko: "글렌드로낙 12년", en: "Glendronach 12Y", ja: "グレンドロナック 12年" }, glassPrice: 28000, bottlePrice: 350000 },
            { name: { ko: "글렌모렌지 오리지널 12년", en: "Glenmorangie The Original 12Y", ja: "グレンモーレンジィ オリジナル 12年" }, glassPrice: 27000, bottlePrice: 330000 },
            { name: { ko: "글렌모렌지 라산타 12년", en: "Glenmorangie The Lasanta 12Y", ja: "グレンモーレンジィ ラサンタ 12年" }, glassPrice: 29000, bottlePrice: 360000 },
            { name: { ko: "글렌모렌지 퀸타 루반", en: "Glenmorangie Quinta Ruban", ja: "グレンモーレンジィ キンタ・ルバン" }, glassPrice: 33000, bottlePrice: 410000 },
            { name: { ko: "글렌모렌지 넥타 16년", en: "Glenmorangie The Nectar 16Y", ja: "グレンモーレンジィ ネクター 16年" }, glassPrice: 39000, bottlePrice: 490000 },
            { name: { ko: "글렌모렌지 시그넷", en: "Glenmorangie Signet", ja: "グレンモーレンジィ シグネット" }, glassPrice: 76000, bottlePrice: 950000 },
            { name: { ko: "올드 풀트니 12년", en: "Old Pulteney 12Y", ja: "オールド・プルトニー 12年" }, glassPrice: 26000, bottlePrice: 330000 },
            { name: { ko: "올드 풀트니 15년", en: "Old Pulteney 15Y", ja: "オールド・プルトニー 15年" }, glassPrice: 51000, bottlePrice: 640000 },
            { name: { ko: "오큰토션 소비뇽블랑 (로우랜드)", en: "Auchentoshan Sauvignon Blanc", ja: "オーヘントッシャン ソーヴィニヨン・ブラン" }, glassPrice: 28000, bottlePrice: 330000 },
            { name: { ko: "오큰토션 쓰리우드 (로우랜드)", en: "Auchentoshan Three Wood", ja: "オーヘントッシャン スリーウッド" }, glassPrice: 36000, bottlePrice: null },
            { name: { ko: "탈리스커 10년 (아일랜드)", en: "Talisker 10Y", ja: "タリスカー 10年" }, glassPrice: 26000, bottlePrice: 330000 }
          ]
        },
        {
          title: { ko: "싱글몰트 아일라 & 블렌디드 스카치", en: "Islay & Blended Scotch", ja: "アイラ＆ブレンデッド・スコッチ" },
          items: [
            { name: { ko: "아드벡 10년 (아일라)", en: "Ardbeg 10Y", ja: "アードベッグ 10年" }, glassPrice: 30000, bottlePrice: 370000 },
            { name: { ko: "아드벡 코리브레칸 (아일라)", en: "Ardbeg Corryvreckan", ja: "アードベッグ コリーヴレッカン" }, glassPrice: 51000, bottlePrice: 680000 },
            { name: { ko: "라가불린 16년 (아일라)", en: "Lagavulin 16Y", ja: "ラガヴーリン 16年" }, glassPrice: 48000, bottlePrice: 590000 },
            { name: { ko: "라프로익 10년 (아일라)", en: "Laphroaig 10Y", ja: "ラフロイグ 10年" }, glassPrice: 27000, bottlePrice: 330000 },
            { name: { ko: "라프로익 쿼터 캐스크 (아일라)", en: "Laphroaig Quarter Cask", ja: "ラフロイグ クォーターカスク" }, glassPrice: 29000, bottlePrice: 360000 },
            { name: { ko: "발렌타인 17년", en: "Ballantine's 17Y", ja: "バランタイン 17年" }, glassPrice: 49000, bottlePrice: 600000 },
            { name: { ko: "발렌타인 21년", en: "Ballantine's 21Y", ja: "バランタイン 21年" }, glassPrice: 68000, bottlePrice: 800000 },
            { name: { ko: "시바스 리갈 12년", en: "Chivas Regal 12Y", ja: "シーバスリーガル 12年" }, glassPrice: 22000, bottlePrice: 280000 },
            { name: { ko: "조니워커 블랙", en: "Johnnie Walker Black", ja: "ジョニーウォーカー ブラック" }, glassPrice: 24000, bottlePrice: 300000 },
            { name: { ko: "조니워커 18년", en: "Johnnie Walker 18Y", ja: "ジョニーウォーカー 18年" }, glassPrice: 47000, bottlePrice: 590000 },
            { name: { ko: "조니워커 블루", en: "Johnnie Walker Blue", ja: "ジョニーウォーカー ブルー" }, glassPrice: 76000, bottlePrice: 950000 },
            { name: { ko: "맥네어스 럼 릭 블렌디드 10년 CS", en: "MacNair's Lum Reek 10Y CS", ja: "マクネアーズ ラムリーク 10年 CS" }, glassPrice: 37000, bottlePrice: 480000 },
            { name: { ko: "맥네어스 럼 릭 블렌디드 12년", en: "MacNair's Lum Reek 12Y", ja: "マクネアーズ ラムリーク 12年" }, glassPrice: 32000, bottlePrice: 400000 },
            { name: { ko: "로얄 살루트 21년 시그니처", en: "Royal Salute 21Y Signature", ja: "ロイヤルサルート 21年 シグネチャー" }, glassPrice: 72000, bottlePrice: 900000 }
          ]
        },
        {
          title: { ko: "아메리칸, 아이리시, 재패니즈, 타이와니즈", en: "American, Japanese, Taiwanese", ja: "アメリカン・ジャパニーズ・台湾ウイスキー" },
          items: [
            { name: { ko: "이글 레어 10년 (버번)", en: "Eagle Rare 10Y", ja: "イーグルレア 10年 (バーボン)" }, glassPrice: 32000, bottlePrice: 400000 },
            { name: { ko: "잭다니엘 올드 넘버 7", en: "Jack Daniel's Old No.7", ja: "ジャックダニエル No.7" }, glassPrice: 22000, bottlePrice: 280000 },
            { name: { ko: "잭다니엘 싱글 배럴", en: "Jack Daniel Single Barrel", ja: "ジャックダニエル シングルバレル" }, glassPrice: 31000, bottlePrice: 390000 },
            { name: { ko: "믹터스 US 버번", en: "Michter's US Bourbon", ja: "ミクターズ US バーボン" }, glassPrice: 27000, bottlePrice: 340000 },
            { name: { ko: "믹터스 US 라이", en: "Michter's US Rye", ja: "ミクターズ US ライ" }, glassPrice: 28000, bottlePrice: 370000 },
            { name: { ko: "레벨 스트레이트 라이", en: "Rebel Straight Rye", ja: "レベル ストレート ライ" }, glassPrice: 25000, bottlePrice: 300000 },
            { name: { ko: "레벨 스트레이트 버번 100프루프", en: "Rebel Straight Bourbon 100 Proof", ja: "レベル バーボン 100プルーフ" }, glassPrice: 25000, bottlePrice: 300000 },
            { name: { ko: "사제락 라이", en: "Sazerac Rye", ja: "サゼラック ライ" }, glassPrice: 29000, bottlePrice: 350000 },
            { name: { ko: "우드포드 리저브", en: "Woodford Reserve", ja: "ウッドフォード・リザーブ" }, glassPrice: 27000, bottlePrice: 320000 },
            { name: { ko: "부쉬밀 블랙부쉬 (아이리시)", en: "Bushmills Black Bush", ja: "ブッシュミルズ ブラックブッシュ" }, glassPrice: 22000, bottlePrice: 280000 },
            { name: { ko: "제임슨 6년 (아이리시)", en: "Jameson 6Y", ja: "ジェムソン 6年" }, glassPrice: 22000, bottlePrice: 280000 },
            { name: { ko: "카이요 재패니즈 미즈나라 시그니처", en: "Kaiyo Japanese Mizunara Signature", ja: "海世 (カイヨウ) 水楢シグネチャー" }, glassPrice: 37000, bottlePrice: 480000 },
            { name: { ko: "카이요 재패니즈 미즈나라 CS", en: "Kaiyo Japanese Mizunara Cask Strength", ja: "海世 (カイヨウ) 水楢カスクストレングス" }, glassPrice: 49000, bottlePrice: 600000 },
            { name: { ko: "카발란 클래식 (대만)", en: "Kavalan Classic", ja: "カバラン クラシック (台湾)" }, glassPrice: 49000, bottlePrice: 600000 },
            { name: { ko: "카발란 셰리오크 (대만)", en: "Kavalan Sherry Oak", ja: "カバラン シェリーオーク (台湾)" }, glassPrice: 59000, bottlePrice: 720000 },
            { name: { ko: "카발란 솔리스트 비노바리끄 (대만)", en: "Kavalan Solist Vinho Barrique", ja: "カバラン ソリスト ヴィーニョバリック" }, glassPrice: 77000, bottlePrice: 990000 }
          ]
        }
      ]
    },
    {
      id: "spirits",
      name: { ko: "스피릿 & 꼬냑", en: "Spirits & Cognac", ja: "スピリッツ＆コニャック" },
      icon: "🥃",
      desc: { 
        ko: "꼬냑, 칼바도스, 진, 보드카, 럼, 데킬라 셀렉션", 
        en: "Cognac, Calvados, Gin, Vodka, Rum, Tequila",
        ja: "コニャック、カルヴァドス、ジン、ウォッカ、ラム、テキーラ"
      },
      subsections: [
        {
          title: { ko: "꼬냑 & 칼바도스 (브랜디)", en: "Cognac & Calvados", ja: "コニャック＆カルヴァドス" },
          items: [
            { name: { ko: "헤네시 V.S.O.P", en: "Hennessy V.S.O.P", ja: "ヘネシー V.S.O.P" }, glassPrice: 27000, bottlePrice: 330000 },
            { name: { ko: "헤네시 X.O", en: "Hennessy X.O", ja: "ヘネシー X.O" }, glassPrice: 77000, bottlePrice: 990000 },
            { name: { ko: "레미 마틴 V.S.O.P", en: "Remy Martin V.S.O.P", ja: "レミーマルタン V.S.O.P" }, glassPrice: 28000, bottlePrice: 360000 },
            { name: { ko: "불라 V.S.O.P (칼바도스)", en: "Boulard V.S.O.P", ja: "ブラー V.S.O.P (カルヴァドス)" }, glassPrice: 27000, bottlePrice: 330000 },
            { name: { ko: "불라 X.O (칼바도스)", en: "Boulard X.O", ja: "ブラー X.O (カルヴァドス)" }, glassPrice: 35000, bottlePrice: 450000 }
          ]
        },
        {
          title: { ko: "진 & 보드카 (Gin & Vodka)", en: "Gin & Vodka", ja: "ジン＆ウォッカ" },
          items: [
            { name: { ko: "바비스 피낭 라씨 진", en: "Bobby's Pinang Raci Gin", ja: "ボビーズ ピナン・ラシ ジン" }, glassPrice: 23000, bottlePrice: 290000 },
            { name: { ko: "헤이먼스 진", en: "Haymans Gin", ja: "ヘイマンズ ジン" }, glassPrice: 22000, bottlePrice: 280000 },
            { name: { ko: "헨드릭스 진", en: "Hendrick's", ja: "ヘンドリックス ジン" }, glassPrice: 25000, bottlePrice: 310000 },
            { name: { ko: "머메이드 진 / 핑크 / 제스트", en: "Mermaid Gin / Pink / Zest", ja: "マーメイド ジン / ピンク / ゼスト" }, glassPrice: 28000, bottlePrice: 370000 },
            { name: { ko: "몽키 47", en: "Monkey 47", ja: "モンキー 47" }, glassPrice: 25000, bottlePrice: 300000 },
            { name: { ko: "탱커레이 넘버 10", en: "Tanqueray No.10", ja: "タンカレー No.10" }, glassPrice: 22000, bottlePrice: 280000 },
            { name: { ko: "앱솔루트 보드카", en: "Absolut", ja: "アブソルート ウォッカ" }, glassPrice: 22000, bottlePrice: 280000 },
            { name: { ko: "그레이 구스", en: "Grey Goose", ja: "グレイグース" }, glassPrice: 23000, bottlePrice: 290000 },
            { name: { ko: "시락 보드카", en: "Ciroc", ja: "シロック" }, glassPrice: 23000, bottlePrice: 290000 },
            { name: { ko: "케텔 원", en: "Ketel One", ja: "ケテルワン" }, glassPrice: 22000, bottlePrice: 280000 },
            { name: { ko: "머메이드 솔트 보드카", en: "Mermaid Salt Vodka", ja: "マーメイド ソルト ウォッカ" }, glassPrice: 26000, bottlePrice: 370000 }
          ]
        },
        {
          title: { ko: "럼 & 데킬라 (Rum & Tequila)", en: "Rum & Tequila", ja: "ラム＆テキーラ" },
          items: [
            { name: { ko: "디플로마티코 리제르바 익스클루시바", en: "Diplomatico Reserva Exclusiva", ja: "ディプロマティコ レセルバ エクスクルーシバ" }, glassPrice: 26000, bottlePrice: 330000 },
            { name: { ko: "맥네어스 파나마 7년", en: "MacNair's Panama 7Y", ja: "マクネアーズ パナマ 7年" }, glassPrice: 26000, bottlePrice: 340000 },
            { name: { ko: "맥네어스 파나마 7년 피티드", en: "MacNair's Panama 7Y Peated", ja: "マクネアーズ パナマ 7年 ピーテッド" }, glassPrice: 29000, bottlePrice: 360000 },
            { name: { ko: "맥네어스 파나마 15년", en: "MacNair's Panama 15Y", ja: "マクネアーズ パナマ 15年" }, glassPrice: 44000, bottlePrice: 550000 },
            { name: { ko: "맥네어스 자메이카 언피티드", en: "MacNair's Jamaica Unpeated", ja: "マクネアーズ ジャマイカ アンピーテッド" }, glassPrice: 26000, bottlePrice: 340000 },
            { name: { ko: "맥네어스 자메이카 피티드", en: "MacNair's Jamaica Peated", ja: "マク네アーズ ジャマイカ ピーテッド" }, glassPrice: 26000, bottlePrice: 340000 },
            { name: { ko: "1800 아네호 데킬라", en: "1800 Anejo", ja: "1800 アネホ テキーラ" }, glassPrice: 26000, bottlePrice: 330000 },
            { name: { ko: "818 블랑코", en: "818 Blanco", ja: "818 ブランコ" }, glassPrice: 32000, bottlePrice: 400000 },
            { name: { ko: "818 레포사도", en: "818 Reposado", ja: "818 レポサド" }, glassPrice: 39000, bottlePrice: 490000 },
            { name: { ko: "818 아네호", en: "818 Anejo", ja: "818 アネホ" }, glassPrice: 60000, bottlePrice: 760000 },
            { name: { ko: "패트론 실버", en: "Patron Silver", ja: "パトロン シルバー" }, glassPrice: 32000, bottlePrice: 390000 },
            { name: { ko: "패트론 레포사도", en: "Patron Reposado", ja: "パトロン レポサド" }, glassPrice: 34000, bottlePrice: 440000 },
            { name: { ko: "패트론 아네호", en: "Patron Anejo", ja: "パトロン アネホ" }, glassPrice: 39000, bottlePrice: 490000 }
          ]
        }
      ]
    },
    {
      id: "beer_soft",
      name: { ko: "맥주 & 무알콜 & 음료", en: "Beer & Mocktails", ja: "ビール・モクテル・飲料" },
      icon: "🍺",
      desc: { 
        ko: "논알콜 목테일, 생맥주, 병맥주 및 탄산음료", 
        en: "Mocktails, Draft & Bottled Beers, Soft Drinks",
        ja: "ノンアルコールモクテル、生ビール、瓶ビール、ソフトドリンク"
      },
      subsections: [
        {
          title: { ko: "논알콜 목테일 (Mocktail)", en: "Non-Alcoholic Mocktail", ja: "ノンアルコール モクテル" },
          items: [
            { name: { ko: "에이 피 피 (A.P.P)", en: "A.P.P", ja: "A.P.P (エーピーピー)" }, price: 28000, desc: { ko: "사과, 파인애플, 패션후르츠 (달콤 상큼함)", en: "Apple, Pineapple, Passionfruit", ja: "リンゴ、パイナップル、パッションフルーツ（甘酸っぱく爽快）" } },
            { name: { ko: "화이트 블루밍", en: "White Blooming", ja: "ホワイト・ブルーミング" }, price: 28000, desc: { ko: "자스민 티, 레몬, 탄산 (은은하고 청량함)", en: "Jasmine tea, Lemon, Soda", ja: "ジャスミン茶、レモン、ソーダ（上品な香りと微炭酸）" } }
          ]
        },
        {
          title: { ko: "맥주 (Beer)", en: "Draft & Bottled Beers", ja: "ビール (生＆瓶)" },
          items: [
            { 
              name: { ko: "한맥 라거 생맥주", en: "Hanmac Lager (Draft)", ja: "ハンメック ラガー生ビール" }, 
              price: 15000, 
              badge: { ko: "한국 로컬 생맥주", en: "Korea Local Draft Beer", ja: "韓国ローカル生ビール" },
              desc: { 
                ko: "대한민국 쌀을 함유하여 부드러운 거품과 깔끔한 목넘김의 코리안 라거 생맥주", 
                en: "Korean local draft beer crafted with premium Korean rice for a silky foam and smooth finish.", 
                ja: "韓国産米を使用し、きめ細やかな泡となめらかな喉ごしが特徴の韓国代表プレミアムラガー生ビール。" 
              } 
            },
            { 
              name: { ko: "파울라너 바이스비어 생맥주", en: "Paulaner Hefe-Weissbier (Draft)", ja: "パウラナー生ビール" }, 
              price: 19000, 
              badge: { ko: "독일 밀 생맥주", en: "Germany Draft Beer", ja: "ドイツ生ビール" },
              desc: { 
                ko: "풍부한 효모와 바나나 향, 부드러운 밀의 풍미를 느낄 수 있는 정통 독일 생맥주", 
                en: "Authentic German wheat draft beer boasting rich natural yeast, subtle banana notes, and a velvety head.", 
                ja: "豊かな酵母とバナナのようなフルーティーなアロマ、なめらかな口当たりの正統派ドイツ生ビール。" 
              } 
            },
            { name: { ko: "스텔라 아르투아 생맥주", en: "Stella Artois Draft", ja: "ステラ・アルトワ 生ビール" }, price: 19000, desc: { ko: "벨기에 필스너 생맥주", en: "Belgian Pilsner Draft Beer", ja: "ベルギー ピルスナー生ビール" } },
            { name: { ko: "구스 IPA 생맥주", en: "Goose IPA Draft", ja: "グース IPA 生ビール" }, price: 19000, desc: { ko: "시트러스 홉 향의 IPA 생맥주", en: "India Pale Ale Draft Beer", ja: "フルーティーなホップ香のIPA生ビール" } },
            { name: { ko: "기네스 드래프트 (병)", en: "Guinness Draught (Bottle)", ja: "ギネス ドラフト (瓶)" }, price: 19000, desc: { ko: "아일랜드 프리미엄 흑맥주", en: "Irish Dry Stout Bottle", ja: "アイルランド 黒ビール" } },
            { name: { ko: "코로나 엑스트라 (병)", en: "Corona Extra (Bottle)", ja: "コロナ エキストラ (瓶)" }, price: 19000, desc: { ko: "라임 서빙 멕시칸 라거", en: "Mexican Lager with lime", ja: "ライム添え メキシカンラガー" } },
            { name: { ko: "크로넨버그 1664 블랑 (병)", en: "Kronenbourg 1664 Blanc (Bottle)", ja: "クローネンブルグ 1664 ブラン (瓶)" }, price: 19000, desc: { ko: "프랑스 시트러스 밀맥주", en: "French Wheat Beer Bottle", ja: "フランス産 白ビール（ヴァイツェン）" } }
          ]
        },
        {
          title: { ko: "소프트 드링크 & 워터", en: "Soft Drinks & Water", ja: "ソフトドリンク＆ウォーター" },
          items: [
            { name: { ko: "코카콜라", en: "Coke", ja: "コカ・コーラ" }, price: 13000 },
            { name: { ko: "코카콜라 제로", en: "Coke Zero", ja: "コカ・コーラ ゼロ" }, price: 13000 },
            { name: { ko: "스프라이트", en: "Sprite", ja: "スプライト" }, price: 13000 },
            { name: { ko: "오렌지 주스", en: "Orange Juice", ja: "オレンジジュース" }, price: 13000 },
            { name: { ko: "크랜베리 주스", en: "Cranberry Juice", ja: "クランベリージュース" }, price: 13000 },
            { name: { ko: "자몽 주스", en: "Grapefruit Juice", ja: "グレープフルーツジュース" }, price: 13000 },
            { name: { ko: "미네랄 워터", en: "Mineral Water", ja: "ミネラルウォーター" }, price: 13000 },
            { name: { ko: "스파클링 워터 (탄산수)", en: "Sparkling Water", ja: "スパークリングウォーター (炭酸水)" }, price: 13000 }
          ]
        }
      ]
    },
    {
      id: "membership",
      name: { ko: "VIP 멤버십 & 웰컴팩", en: "VIP Membership", ja: "VIP会員＆ウェルカムパック" },
      icon: "👑",
      desc: { 
        ko: "단골 고객을 위한 특별 혜택 및 패키지", 
        en: "Exclusive Benefits & Membership Packs",
        ja: "リピーター様限定の特別優待＆特典パッケージ"
      },
      bannerImage: "img/membership_banner.jpg",
      subsections: [
        {
          title: { ko: "웰컴팩 멤버십 (가입기간 6개월)", en: "Welcome Pack (6 Months)", ja: "ウェルカムパック (加入期間6ヶ月)" },
          items: [
            {
              name: { ko: "Welcome Pack A (웰컴팩 A)", en: "Welcome Pack A", ja: "ウェルカムパック A" },
              price: 200000,
              badge: { ko: "재방문 15% 할인", en: "15% Ongoing Discount", ja: "再訪時 15%割引" },
              desc: {
                ko: "[세트 메뉴 3가지 중 택1 무료 제공] ① 루이뒤몽 샴페인 + 과일 치즈 플래터 ② 스카르파 티모라쏘 화이트 + 플래터 ③ 풀리아팝 루미나리아 레드 + 플래터\n★ 가입 후 6개월간 재방문 시 모든 음식/음료 상시 15% 할인!",
                en: "Choose 1 from 3 menu options + Fruits & Cheese Platter. Enjoy 15% off your subsequent visits for 6 months.",
                ja: "【3種から選べるセット1品無料提供】①ルイ・デュモン シャンパン ＋ プラッター ②ティモラッソ白ワイン ＋ プラッター ③ルミナリア赤ワイン ＋ プラッター\n★ ご加入後6ヶ月間、次回以降のご来店時に全飲食代がいつでも15％OFF！"
              }
            },
            {
              name: { ko: "Welcome Pack C (웰컴팩 C)", en: "Welcome Pack C", ja: "ウェルカムパック C" },
              price: 300000,
              badge: { ko: "재방문 20% 할인", en: "20% Ongoing Discount", ja: "再訪時 20%割引" },
              desc: {
                ko: "글렌피딕 12년 위스키 보틀 + 과일 치즈 플래터 기본 제공\n★ 가입 후 6개월간 재방문 시 모든 음식/음료 상시 20% 할인!",
                en: "Glenfiddich 12Y Bottle + Fruits & Cheese Platter. Enjoy 20% off your subsequent visits for 6 months.",
                ja: "グレンフィディック12年ボトル ＋ フルーツ＆チーズ盛り合わせ無料提供\n★ ご加入後6ヶ月間、次回以降のご来店時に全飲食代がいつでも20％OFF！"
              }
            }
          ]
        },
        {
          title: { ko: "KLOUD VIP 멤버십 (유지기간 3개월)", en: "KLOUD VIP Membership (3 Months)", ja: "KLOUD VIPメンバーシップ (3ヶ月)" },
          items: [
            {
              name: { ko: "NOBLESSE (노블레스 멤버십)", en: "Noblesse Membership", ja: "ノブレス メンバーシップ" },
              price: 990000,
              period: { ko: "3개월", en: "3 Months", ja: "3ヶ月" },
              desc: {
                ko: "글렌알라키 12년 위스키 3병 (Glenallachie 12Y * 3 Bottles) 제공. 프리미엄 보틀 키핑 서비스.",
                en: "Glenallachie 12Y * 3 Bottles provided with premium bottle keeping.",
                ja: "グレンアラヒー12年ウイスキー3本提供。プレミアムボトルキープサービス。"
              }
            },
            {
              name: { ko: "SIGNATURE (시그니처 VIP 멤버십)", en: "Signature VIP Membership", ja: "シグネチャー VIPメンバーシップ" },
              price: 1990000,
              period: { ko: "3개월", en: "3 Months", ja: "3ヶ月" },
              badge: { ko: "호텔 숙박권 포함", en: "Hotel Stay Included", ja: "ホテル宿泊券付き" },
              desc: {
                ko: "글렌알라키 12Y + 15Y + 18Y 각 1병 (총 3병) 기본 제공\n+ 호텔 객실 1박 무료 숙박권 1매 (조식 포함)\n+ 발렛 주차 3회 무료(4시간)\n+ 사우나 3회 이용권\n+ 3개월간 클라우드 바 단품 이용 시 10% 상시 할인",
                en: "Glenallachie 12Y + 15Y + 18Y (3 bottles) + Free 1 Night Hotel Stay Voucher (incl. breakfast) + 3x Free Valet + 3x Sauna passes + 10% discount on food & drinks.",
                ja: "グレンアラヒー12年・15年・18年（各1本/計3本）提供 ＋ ホテル1泊無料宿泊券（朝食付） ＋ バレーパーキング3回無料 ＋ サウナ利用券3枚 ＋ 3ヶ月間飲食代10%割引"
              }
            }
          ]
        }
      ]
    }
  ]
};

if (typeof window !== 'undefined') {
  window.menuData = menuData;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = menuData;
}
