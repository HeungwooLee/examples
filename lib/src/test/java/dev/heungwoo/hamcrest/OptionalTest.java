package dev.heungwoo.hamcrest;

import static org.hamcrest.MatcherAssert.assertThat;

import java.util.Optional;

import org.hamcrest.Description;
import org.hamcrest.Matcher;
import org.hamcrest.TypeSafeMatcher;
import org.junit.jupiter.api.Test;

public class OptionalTest {

    private static final String GIVEN_STRING = "given string";

    @Test
    public void givenOptionalWhenAssertCompareValueOfOptional() {
        Optional<String> givenString = Optional.of(GIVEN_STRING);
        assertThat(givenString, hasValue(GIVEN_STRING));
    }

    private <T> Matcher<Optional<T>> hasValue(T expected) {
        return new TypeSafeMatcher<Optional<T>>() {

            @Override
            public void describeTo(Description description) {
                description.appendText("has optional value that is ");
            }

            @Override
            protected boolean matchesSafely(Optional<T> item) {
                return item.isPresent() && expected.equals(item.get());
            }
            
        };
    }
}