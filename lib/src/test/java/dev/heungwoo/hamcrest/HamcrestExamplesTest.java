package dev.heungwoo.hamcrest;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;
import static dev.heungwoo.hamcrest.OptionalMatcher.hasOptionalValue;

import java.util.Optional;


import org.junit.jupiter.api.Test;

public class HamcrestExamplesTest {

    private static final String GIVEN_STRING = "given string";

    @Test
    public void givenOptionalWhenAssertCompareValueOfOptional() {
        Optional<String> givenString = Optional.of(GIVEN_STRING);
        assertThat(givenString, hasOptionalValue(is(GIVEN_STRING)));
    }

}