package dev.heungwoo.hamcrest;

import java.util.Optional;

import org.hamcrest.Description;
import org.hamcrest.Matcher;
import org.hamcrest.TypeSafeMatcher;

public class OptionalMatcher {

    public static <T> Matcher<Optional<T>> hasOptionalValue(Matcher<Object> nestedMatcher) {
        return new TypeSafeMatcher<Optional<T>>() {

            @Override
            public void describeTo(Description description) {
                description.appendText("has optional value that is ");
            }

            @Override
            protected boolean matchesSafely(Optional<T> item) {
                return item.isPresent() && nestedMatcher.matches(item.get());
            }

        };   
    }
    
}
