#

Flexbox 모델을 사용하려면 부모 엘리먼트를 flex container (AKA flexible container)로 만들어야한다.
display: flex 또는 display: inline-flex 를 설정하면 된다.

Flex container: display: flex 를 설정 한 부모 엘리먼트
Flex items : Flex container 내의 자식 엘리먼트

# Flex Container 프로퍼티(Properties)

Flex-direction || Flex-wrap || Flex-flow || Justify-content || Align-items || Align-content

## 1. Flex-direction

flex-direction 속성은 플렉스 아이템들(flex-items)이 주축(main axis)을 따라 배치되는 방향을 제어한다.

```
/* 여기서 ul은 플렉스 컨테이너를 나타낸다. */
ul {
  flex-direction: row || column || row-reverse || column-reverse;
}
```

주축(main axis) 및 교차 축(cross axis)

기본적으로 flex-direction 속성은 행(row)으로 설정되고 주축을 따라 플렉스 아이템을 정렬한다.

flex-direction 속성이 열(column)로 변경되면 플렉스 아이템이 교차 축을 따라 정렬된다.

## 2. Flex-wrap

// 여기서 ul 은 플렉스 컨테이너를 나타낸다
ul {
flex-wrap: wrap || no-wrap || wrap-reverse;
}

플렉스 컨테이너에 더 많은 아이템이 추가된다면 크기가 조정되거나 아이템을 다른 줄로 나눌까?

* no-wrap (기본값): 플렉스 아이템을 한 줄에 계속해서 수용
* wrap: 컨테이너 내의 사용 가능한 공간이 플렉스 아이템을 기본 너비로 더이상 포함할 수 없으면 여러 줄로 나뉘어진다.
* wrap-reverse: 플렉스 아이템이 반대(reverse) 방향 여러 라인으로 나뉘어 진다.

## 3. flex-flow

flex-flow 은 flex-direction 및 flex-wrap 값의 약칭 속성이다

```
ul {
    flex-flow: row wrap; /*direction "row" and yes, please wrap the items.*/
}
```

## 4. Justify-content

justify-content 속성은 주축(main axis)에서 플랙스 아이템을 배치하는 방법을 정의한다.

```
ul {
    justify-content: flex-start || flex-end || center || space-between || space-around
}
```

* flex-start: 모든 flex-items 를 주축(main axis)의 시작 부분으로 그룹화한다.
* Flex-end: flex-items 를 주축(main axis)의 끝으로 그룹화한다.
* center: flex-items 를 주축(main axis)을 따라 중앙에 배치
* space-between: 각 플렉스 항목간에 동일한 간격(space)을 유지
* space-around: flex-items 주위에 동일한 간격을 유지

## 5. Align-items

플렉스 아이템이 교차 축(cross axis)에 배치되는 방법을 정의

```
/* ul represents any flex container*/
ul {
    align-items: flex-start || flex-end || center || stretch || baseline
}
```

* stretch (기본값): 플렉스 아이템이 플렉스 컨테이너의 전체 높이를 채울 수 있도록 플렉스 아이템을 "늘린다(stretch)"
* flex-start: 플렉스 아이템을 교차 축의 시작 부분에 그룹화한다.
* flex-end: 플렉스 아이템을 교차 축의 끝으로 그룹화한다.
* center: 플렉스 아이템의 중심에 플렉스 아이템을 정렬한다.
* baseline: 베이스라인(baselines)을 따라 플렉스 아이템을 정렬한다.

## 6. Align-content

align-content 속성은 multi-line 플렉스 컨테이너에서 사용된다. (multi-line 플렉스 컨테이너: 플렉스 아이템이 `Flex-wrap: wrap`에 의해 여러줄로 나눠져 있는 경우)

multi-line 플렉스 컨테이너에서 플렉스 아이템이 정렬되는 방법을 컨트롤 한다.

* stretch (기본값): 플렉스 아이템은 교차 축을 따라 사용 가능한 공간에 맞게 "늘어난다(stretched)".
* Flex-start: multi-line 컨테이너의 아이템을 교차 축의 시작 부분에 정렬한다. 교차 축은 기본적으로 위에서 시작하여 아래로 정렬되는 거을 기억하자.
* flex-end: 플렉스 아이템을 교차 축의 끝에 정렬한다.
* center: 플렉스 아이템을 교차 축의 중심(center)에 정렬한다.
* space-between
* space-around

# Flex Item Properties

Order || Flex-grow || Flex-shrink || Flex-basis

## 1. Order

order 속성을 사용하면 컨테이너 내의 플렉스 아이템을 재정렬(reordering) 할 수 있다.

플렉스 아이템은 가장 낮은 값에서 가장 높은 값 순으로 재배열 된다.

기본적으로 플렉스 아이템의 순서 값은 모두 0 임을 잊지 말자.

```
/*select first li element within the ul */
li:nth-child(1) {
    order: 1; /*give it a value higher than 0*/
}
```

재배열(re-ordering)은 두 개 이상의 플렉스 아이템의 순서 값이 같을 때 소스 파일의 위치를 기반으로한다.

## 2. flex-grow and flex-shrink

flex-grow 및 flex-shrink 속성은 여분의 공간이 있다면 플렉스 아이템을 "확장(grow)" 해야하는지, 또는 여분의 공백이 없다면 "축소(shrink)"해야 하는지를 제어한다.

기본적으로 flex-grow 속성은 0 으로 설정된다. 즉, 플렉스 아이템은 사용 가능한 전체 공간에 맞게 확장되지 않는다.

flex-grow 값을 1 로 변경하면 플렉스 아이템은 현재 사용 가능한 공간을 모두 차지하기 위해 "확장된다(grow)".

브라우저를 리사이즈하면 플렉스 아이템이 새 화면 너비에 맞게 "축소(shrink)" 된다.
기본적으로 shrink 속성은 1 로 설정되기 때문이다.

## 3. flex-basis

flex-grow 또는 flex-shrink 속성이 컨테이너에 맞게 크기를 조정하기 전에 flex-basis 속성은 플렉스 아이템의 초기 크기를 지정한다.

* auto (기본값)
  플렉스 아이템의 너비는 **컨텐츠 크기**에 따라 "자동"으로 계산된다 (당연히, 패딩도 포함된다).
  플렉스 아이템의 컨텐츠를 늘리면 자동으로 크기가 조정된다.

```
li {
    flex-basis: 150px;
}
```

이제 플렉스 아이템 너비는 150px 로 제한되었다.

## 4. flex shorthand

flex shorthand 는 flex-grow, flex-shrink 및 flex-basis 속성을 한꺼번에 설정할 수 있게한다.

```
li {
  flex: 0 1 auto;
}
```

위의 코드는 이 세 가지 속성을 설정하는 것과 같다. flex-grow: 0; flex-shrink: 1; flex-basis: auto

flex-grow 및 flex-shrink 값만 설정하면 flex-basis 는 기본값인 0 이 된다.

### 1. flex: 0 1 auto

이는 flex: default 를 작성하는 것과 동일하며 모든 플렉스 아이템의 기본 값이다.

### 2. flex: 0 0 auto

이것은 flex: none 과 같다.

그것은 기본적으로 초기(initial) 폭이 플렉스 아이템의 컨텐츠 크기를 기반으로하는 고정 너비 엘리먼트이다.

### 3. flex: 1 1 auto

이것은 flex: auto 와 동일하다.

이것은 "자동으로 초기 너비를 계산하지만 사용 가능한 전체 공간에 맞게 증가(grow)하고 필요한 경우 축소(shrink)된다"는 것을 의미한다.

### 4. flex: "양수"

## 5. align-self

우리는 align-items 속성으로 플렉스 컨테이너 내의 모든 플렉스 아이템을 일괄적으로 정렬하는데 사용 되는 것을 위에서 확인 했다.

인접한(neighboring) 플렉스 아이템에 영향을 주지 않고, 단일 플렉스 아이템의 위치를 교차 축(cross-axis)을 따라 변경하고자 할 떄 사용

```
/*첫 번째 리스트 아이템 대상*/
li:first-of-type {
    align-self: auto || flex-start || flex-end || center || baseline || stretch
}
```

* flex-end
* center
* stretch
* baseline
* auto: auto 는 타겟에 지정된 플렉스 아이템의 값을 부모의 align-items 값으로 설정하거나 엘리먼트에 부모가없는 경우 늘린다(stretch).

# Absolute and Relative flex-items

Absolute flex-items have their widths based solely on flex, while relative flex items have their widths based on content size.

플렉스 아이템의 너비가 자동으로 계산되는 경우(flex-basis: auto)에는 플렉스 아이템에 포함 된 내용의 크기를 기반으로한다.

When there are two or more flex-items with zero based flex-basis values, they share the spacing available based on the flex-grow values.

# Auto-margin Alignment

플렉스 아이템에서 margin: auto 를 사용하면, auto 값을 갖는 방향 (왼쪽, 오른쪽 또는 양쪽 모두)이 빈 공간을 차지하게 된다.

플렉스 아이템에서 auto-margin 정렬을 사용하면 justify-content 속성이 더 이상 작동하지 않는다.

# 플렉스 방향(flex-direction)을 바꾸면 어떻게 될까?

기본적으로 주축(main-axis) 및 교차 축(cross-axis)은 "왼쪽에서 오른쪽"방향 "위에서 아래"방향으로 배치 된다고 얘기한 것을 기억하는가?

flex-direction: column 을 사용하면 주축과 교차축이 변경된다.
