# 체중 기록 (Weight Tracker)

심플하게 기록하고 눈으로 확인하는 체중 관리 웹앱. 단일 `index.html`, 외부 라이브러리 없음, 데이터는 브라우저에 로컬 저장됩니다.

## 기능
- 키 입력 후 날짜별 체중 기록 (안 재는 날 있어도 OK)
- **그래프**: 실제 값 점 + 7일 이동평균 추세선 + 목표선
- 기간 필터 (1주 / 1개월 / 3개월 / 전체)
- 요약: 현재 체중, BMI, 최근 7일 증감, 목표까지 남은 양 · 진행률
- **인바디 별도 기록** (골격근량 · 체지방률 · 체지방량)
- 메모 한 줄
- 백업: JSON 전체 백업 / CSV 내보내기 / 불러오기
- 다크모드 (시스템 자동 + 수동 토글)
- **PWA**: 홈 화면에 설치, 오프라인 사용, 영구 저장

## 사용
1. 브라우저로 [https://wooheejun.github.io/Weight_tracker/](https://wooheejun.github.io/Weight_tracker/) 접속
2. 폰: 브라우저 메뉴 → "홈 화면에 추가" (앱처럼 실행 · 오프라인 동작)
3. 데이터는 이 기기에만 저장되므로, 가끔 ⋯ 메뉴에서 JSON 백업을 받아두세요.

## 로컬 실행
```
python -m http.server 5177
```
후 `http://localhost:5177/index.html` 접속. (PWA 설치·오프라인은 HTTPS 또는 localhost에서만 동작)

## 데이터
- 저장 위치: 브라우저 `localStorage`
- `navigator.storage.persist()`로 영구 저장을 요청해 브라우저 정리에도 유지
- 앱/브라우저 데이터를 직접 삭제하면 지워지므로 JSON 백업 권장
