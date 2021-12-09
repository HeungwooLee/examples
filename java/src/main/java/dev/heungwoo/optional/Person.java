package dev.heungwoo.optional;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Builder
@RequiredArgsConstructor
@Getter
public class Person {
    private final String name;
    private final int age;
}
