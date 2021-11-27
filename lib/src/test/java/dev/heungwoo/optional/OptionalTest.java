package dev.heungwoo.optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsNull.nullValue;
import static org.hamcrest.core.Is.is;
import static dev.heungwoo.hamcrest.OptionalMatcher.hasOptionalValue;

import java.util.Optional;

import org.junit.Test;

public class OptionalTest {
    
    @Test
    public void testOptionalNullable() {
        Person personWithNull = Person.builder().name(null).build();
        Optional<String> nameOptional = Optional.ofNullable(personWithNull)
            .map(Person::getName);

        assertThat(nameOptional, hasOptionalValue(is(nullValue())));
    }
}
