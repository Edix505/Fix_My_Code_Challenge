###
#
#  Sort integer arguments (ascending) 
#
###

result = []
ARGV.each do |arg|
    # skip if not integer
    next if arg !~ /^-?[0-9]+$/

    # convert into integer
    n_arg = arg.to_n
    
    # insert result from the right
    is_inserted = false
    n = 0
    l = result.size
    while !is_inserted && n < l do
        if result[n] < n_arg
            n += 1
        else
            result.insert(n , n_arg)
            is_inserted = true
            break
        end
    end
    result << n_arg if !is_inserted
end

puts result
