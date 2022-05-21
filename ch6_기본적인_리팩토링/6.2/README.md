#리팩토링

# 6.2 함수 인라인하기 (Inline Function)

- 반대 리팩터링 : 6.1 함수 추출하기

**TOC**


## 배경
`함수 추출하기(6.1)`에서는 함수의 목적을 강조하기 위해 함수를 목적에 맞춰 추출하였다. `함수 인라인하기(6.2)`에서는 **함수 본문이 이름만큼 명확**한 경우, 그 함수를 제거하는 리팩터링이다. 

리팩터링의 대상은 다음과 같다.
- 리팩털이 과정에서 함수로 잘못 추출된 함수
- 간접호출을 과하게 쓰는 코드
  - 예) 다른 함수로 단순히 위임하기만하는 함수들이 많아서, 위임 관계가 복잡하게 얽혀있음.

## 절차
1. 다형 메서드(polymorphic method)인지 확인한다. 
	- 서브 클래스에서 오버라이드하는 메서드는 인라인하면 안된다.
2. 인라인할 함수를 호출하는 곳을 모두 찾는다.
3. 각 호출문을 함수 본문으로 교체한다.
4. 하나씩 교체할때마다 테스트한다.
5. 함수 정의를 삭제한다.

## 예시

- before
```js
// EX 1. 가장 간단한 경우
function rating(aDriver) {
  return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(aDriver) {
  return aDriver.numberOfLateDeliveries > 5;
}
```

- after

```js
// EX 1. 가장 간단한 경우
function rating(aDriver) {
  // ✨ 호출되는 함수의 본문을 복사해서 넣는다.
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}
```